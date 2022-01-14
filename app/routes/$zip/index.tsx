import { useLoaderData } from "remix";

export const loader = async ({ params }) => {
  return params.zip;
};

export default function Index() {
  const zip = useLoaderData()
  return (
    <>
      <h1>Weather for {zip}</h1>

      <ul>
        <li>Now</li>
        <li>Hourly</li>
        <li>Daily</li>
        <li>Past</li>
      </ul>
    </>);
}

