import { gql } from "@apollo/client";
import client from "../../apollo-client";

const fetchPetsWithFilters = `query(
  $age: [String]
  $city: String
  $department: String
  $gender: [String]
  $type: [String]
  $sort: String
  $start: Int
  $limit: Int
) {
  pets(
    sort: $sort
    limit: $limit
    start: $start
    where: {
      gender: $gender
      age: $age
      type: $type
      city: $city
      department: $department
    }
  ) {
    id
    slug
    imageUrl
    name
    gender
    age
    createdAt
    city
    department
    type
    foundation {
      name
      slug
    }
  }
  petsCount ( where : {
    gender: $gender
      age: $age
      type: $type
      city: $city
      department: $department
  })
}
`;

export const fetchPets = async searchObject => {
  // console.log(searchObject);

  const {
    age = ["puppy", "young", "adult", "senior"],
    city,
    department,
    foundation,
    gender = ["male", "female"],
    limit = 10,
    order = "desc",
    page = 1,
    sort = "createdAt",
    type = ["dog", "cat", "other"],
  } = searchObject;

  const { data } = await client.query({
    query: gql`
      ${fetchPetsWithFilters}
    `,
    // WHEN 2nd page, it will start from 9th items. (page - 1) * pageItems
    // WHEN 3rd page, it will start from 18th items. (page3 - 1) * 9items
    variables: {
      start: +limit * (+page - 1),
      limit: +limit,
      sort: `${sort}:${order}`,
      age,
      city,
      department,
      foundation,
      gender,
      type,
    },
  });
  // console.log(data);
  return data;
};
