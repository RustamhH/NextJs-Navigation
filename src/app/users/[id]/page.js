const UserDetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { cache: 'no-store' }
  );
  const user = await response.json();

  return (
    <div>{JSON.stringify(user)}</div>
  );
};

export default UserDetails;
