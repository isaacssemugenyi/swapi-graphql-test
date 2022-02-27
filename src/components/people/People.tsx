import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  allPeople: any,
  getMorePeople: (page: number) => void,
  viewSinglePerson: (name: string) => void
}

export const People: React.FC<Props> = ({ allPeople, getMorePeople, viewSinglePerson }) => {
  const [ page, setPage ] = React.useState(1);
    const dispatch: Dispatch<any> = useDispatch()

  React.useEffect(()=>{
      if(page > 0){
        fetchMorePeople(page)
      }
  }, [page])

  const fetchMorePeople = React.useCallback(
    (page: number) => dispatch(getMorePeople(page)),
    [dispatch, getMorePeople]
  )

  const viewUserDetails = React.useCallback(
    (name: string) => dispatch(viewSinglePerson(name)),
    [dispatch, viewSinglePerson]
  )

  return (
    <div>
        <section onClick={() => }>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <button onClick={() => deleteArticle(article)}>Delete</button>  
        </section>
    </div>
  )
}