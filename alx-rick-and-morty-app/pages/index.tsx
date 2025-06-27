import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '@/graphql/queries';

export default function TestPage() {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: 1 }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>GraphQL Test</h1>
      <p>Episodes found: {data?.episodes?.results?.length}</p>
      {data?.episodes?.results?.map((episode: any) => (
        <div key={episode.id}>
          <h3>{episode.name}</h3>
          <p>{episode.episode}</p>
        </div>
      ))}
    </div>
  );
}