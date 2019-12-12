import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScriptListItem from './ScriptListItem/ScriptListItem'
import { setCurrentPage, setScripts } from '../../../../actions/scriptsActions'

import './scriptList.scss'
import homeIoApi from '../../../../homeIoApi'

export default function ScriptList () {
  const perPage = 5
  const { scripts, currentPage } = useSelector(state => state.scriptsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (scripts !== null) {
      return
    }
    homeIoApi
      .getScripts(localStorage.getItem('token'))
      .then(res => {
        dispatch(setScripts(res.data.data))
      }).catch(err => {
        console.log(err)
      })
  }, [scripts])

  if (scripts === null) {
    return null
  }

  const pagesCount = Math.ceil(scripts.length / perPage)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {scripts.map(script => {
        return <ScriptListItem key={script.id} item={script} />
      })}{/*
      <div className='row'>
        {pages.map(page => {
          return (
            <span
              key={page}
              className={currentPage === page ? 'current_page' : 'page'}
              onClick={() => dispatch(setCurrentPage(page))}
            >
              {page}
            </span>
          )
        })}
      </div>*/}
    </div>
  )
}
