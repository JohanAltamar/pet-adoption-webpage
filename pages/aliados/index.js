import Link from "next/link";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Button from "../../components/ui/Button";
import { responsivePadding } from "../../styles/stylingVars";
import SEO from "../../components/SEO";

const AliadosPage = ({ data }) => {
  const router = useRouter();
  // TODO: Add sponsors collection and manage data
  const { foundations, sponsors } = data;

  return (
    <div className={responsivePadding}>
      <SEO title="Nuestros Aliados" />

      <h1 className="text-center text-2xl font-bold tracking-wider">
        Nuestros Aliados
      </h1>
      {!!foundations.length && (
        <>
          <h2 className="mt-3 text-left text-xl font-bold tracking-wider">
            Fundaciones
          </h2>
          <article className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-3">
            {foundations.map(foundation => (
              <Link
                key={foundation.id}
                href={`/fundaciones/${foundation.slug}`}
              >
                <a>
                  <figure className="cursor-pointer">
                    <img
                      className="w-full object-cover p-2 rounded-full border-yellow-600 border-4 hover:border-yellow-700 hover:shadow-xl transition-all duration-300"
                      src={foundation.coverUrl}
                      alt={foundation.name}
                      style={{ aspectRatio: "1/1" }}
                    />
                    <figcaption className="mt-3 text-center font-bold">
                      {foundation.name}
                    </figcaption>
                  </figure>
                </a>
              </Link>
            ))}
          </article>
          <div className="text-center mt-5">
            <Button
              variant="outlined"
              color="primary"
              rounded="lg"
              onClick={() => router.push("/fundaciones")}
            >
              Ver Todas
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Foundations {
        foundations(limit: 8) {
          name
          id
          imageUrl
          slug
          coverUrl
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}

export default AliadosPage;
