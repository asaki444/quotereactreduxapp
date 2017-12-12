import 'react' from react

const Authors = (props)=>{
  return(
    <div>
     <h1>Authors Page</h1>
     {props.authors.map(actor=>
      <div className='actor'>
        <h2>{author.name}</h2>
        <h3>{author.quotes}</h3>
        </div>
    )}
    </div>

  )
}
