interface Props {
    title: string,
}

const MyTitle = ({ title } : Props) => {
  
    console.log('MyTitle re-render');
    return <h1 className="text-3xl">{ title }</h1>
  
}

export default MyTitle
