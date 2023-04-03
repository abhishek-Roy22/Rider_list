export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { abhis: data },
  };
};

const Details = ({ abhis }) => {
  //   console.log(abhis);
  return (
    <>
      <h1>Details Page</h1>
      <h2>{abhis.name}</h2>
      <p>{abhis.email}</p>
      <p>{abhis.website}</p>
      <p>{abhis.address.city}</p>
    </>
  );
};

export default Details;
