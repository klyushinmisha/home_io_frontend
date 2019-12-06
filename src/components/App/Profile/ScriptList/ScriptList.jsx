import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScriptListItem from './ScriptListItem/ScriptListItem'
import setCurrentPage from '../../../../actions/scriptsActions'

import './scriptList.scss'

export default function ScriptList () {
  const { scripts, currentPage, scriptsOnPage, totalScriptsCount } = useSelector(state => state.scriptsReducer)
  const dispatch = useDispatch()
  const pagesCount = Math.ceil(totalScriptsCount / scriptsOnPage)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }


  useEffect(() => {
    // AXIOS
  },[])

  return (
    <div>
      {scripts.map(script => <ScriptListItem scriptName={script} />)}
      <div className='row'>
        {pages.map(page =>
          <span
            className={currentPage == page ? 'current_page' : 'page'}
            onClick={() => dispatch(setCurrentPage(page))}
          >{page}
          </span>)}
      </div>
    </div>
  )
}
