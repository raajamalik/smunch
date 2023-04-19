import Link from "next/link";
import Head from "next/head";
import { Barlow } from "next/font/google";
import { useQuery } from "@apollo/client";
import { ME } from "@/graphql/queries";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { useAppDispatch } from "@/lib/redux/hooks";

const inter = Barlow({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const router = useRouter();
  const { data, loading, error } = useQuery(ME, {
    variables: { userInput: { id: 2 } },
  });
  const dispatch = useAppDispatch();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { firstName, addresses } = data.me;
  
  dispatch({ type: "user/setUser", payload: data.me });

  const handleSearch = () => {
    router.push("/search");
  };

  return (
    <Layout><div className="min-h-screen p-6 bg-[url('/back-food.jpg')] bg-gray-100 bg-cover">
      <Head>
        <title>Smunch: Get a Taste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row my-4 font-normal justify-center">
        <div className="flex flex-col mx-8 p-2 sm:flex-row align-middle items-center justify-center rounded-lg bg-gray-100 bg-opacity-50 backdrop-blur border-2 border-white hover:shadow-2xl">
          <h1 className="text-2xl text-gray-900 mx-4">
            Hey {firstName}!
          </h1>

          <input
            type="text"
            id="search"
            placeholder="What are you craving?"
            onClick={handleSearch}
            onKeyDown={handleSearch}
            className="border p-3 m-4 w-80 border-purple-600 text-purple-600 rounded hover:text-white outline-4 outline-offset-4 outline-purple-200"
          />
          <p className="my-2 text-sm text-gray-800">
            Delivering to
            {addresses.map((address: any) => (
              <>
                <span key={address.id}>
                  : {address.street}, {address.city}, {address.state}
                </span>
                <span className="mt-2 text-sm text-purple-700 ">
                  (
                  <Link
                    href="/address"
                    className="underline underline-offset-2"
                  >
                    Edit
                  </Link>
                  )
                </span>
              </>
            ))}
          </p>
        </div>
      </main>
    </div>
    </Layout>
  );
}
