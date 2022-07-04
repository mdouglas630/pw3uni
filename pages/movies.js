export default function Movies({ data }) {

  return (

    <div>

      <div>

        {data.Search.map((m) => <div>{m.Title} --- {m.Year}<img src={m.Poster} width="200px"/></div>)}

      </div>

    </div>

  )

}


export async function getServerSideProps(context) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=c8f0306e&s=bagdad`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}


