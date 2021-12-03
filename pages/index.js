import Head from 'next/head'
import {Accordion} from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS app with react-bootstrap</title>
      </Head>

      <main>
        <h1>
          Welcome
        </h1>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet...
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Duis aute irure dolor in reprehenderit in voluptate...
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </main>
    </div>
  )
}
