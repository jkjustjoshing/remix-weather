import {
  Link,
  Form,
  redirect
} from "remix";

export const action = async ({ request }) => {
  console.log('yes')
  const formData = await request.formData();
  const zip = formData.get('zip')
  return redirect(`/${zip}`);
};


export default function Index() {
  return (
    <>
      <Form method='post'>
        <label htmlFor="zip">Choose a location by zip code</label>
        <input type='text' id='zip' name='zip' placeholder='12345' />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
