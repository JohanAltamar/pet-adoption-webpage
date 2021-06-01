import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { responsivePadding } from "../../styles/stylingVars";
import SEO from "../../components/SEO";

const FoundationsPage = ({ data, departments }) => {
  return (
    !!departments && (
      <>
        <SEO title="Nuestras Fundaciones" />

        <div className={`${responsivePadding}`}>
          <h1 className="text-center text-2xl font-bold">Fundaciones</h1>
          {departments.map(department => (
            <div key={department}>
              {!!data.filter(item => item.department === department).length && (
                <>
                  <h3 className="font-bold text-lg">{department}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-5">
                    {data
                      .filter(item => item.department === department)
                      .map(foundation => (
                        <Link
                          href={`/fundaciones/${foundation.slug}`}
                          key={foundation.id}
                        >
                          <a className="hover:shadow-2xl transition-all duration-300">
                            <figure className="cursor-pointer p-2">
                              <img
                                className="m-auto w-full object-cover"
                                src={foundation.coverUrl}
                                alt={foundation.name}
                                style={{ aspectRatio: "1/1" }}
                              />
                              <figcaption className="text-center font-bold">
                                {foundation.name}
                              </figcaption>
                            </figure>
                          </a>
                        </Link>
                      ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </>
    )
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Foundations {
        foundations(sort: "department:asc", limit: 8) {
          name
          id
          imageUrl
          slug
          coverUrl
          department
        }
        foundationsConnection {
          groupBy {
            department {
              key
            }
          }
        }
      }
    `,
  });
  const { foundations, foundationsConnection } = data;
  let departments = [...foundationsConnection.groupBy.department]
    .map(({ key }) => key)
    .sort();

  return {
    props: {
      data: foundations,
      departments,
    },
  };
}

export default FoundationsPage;
