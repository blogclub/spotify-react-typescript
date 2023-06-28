import classNames from 'classnames/bind'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ArtistDataProps } from '../../../types'
import styles from './ArtistList.module.scss'

const cx = classNames.bind(styles)

interface ArtistListProps {
  data: ArtistDataProps[] | null
}

const ArtistList: React.FC<ArtistListProps> = ({ data }) => {
  console.log(data)
  const renderData: any = []
  if (data) {
    if (data.length === 1) {
      renderData.push(
        <Link key={0} to={`/playlist?${data[0].id}`}>
          <span className={cx('playlist')}>{data[0].name}</span>
        </Link>
      )
    } else if (data?.length === 2) {
      renderData.push(
        <>
          <Link key={0} to={`/playlist?${data[0].id}`}>
            <span className={cx('playlist')}>{data[0].name}</span>
          </Link>
          {', '}
          <Link key={1} to={`/playlist?${data[1].id}`}>
            <span className={cx('playlist')}>{data[1].name}</span>
          </Link>
        </>
      )
    } else {
      for (let i = 0; i < data.length - 2; i++) {
        renderData.push(
          <Fragment key={i}>
            <Link to={`/playlist?${data[i].id}`}>
              <span className={cx('playlist')}>{data[0].name}</span>
            </Link>
            {', '}
          </Fragment>
        )
      }
      renderData.push(
        <Fragment key={data.length - 2}>
          <Link to={`/playlist?${data[data.length - 2].id}`}>
            <span className={cx('playlist')}>
              {data[data.length - 2].name}
            </span>
          </Link>
          {' and '}
        </Fragment>
      )
      renderData.push(
        <Link key={data.length - 1} to={`/playlist?${data[data.length - 1].id}`}>
          <span className={cx('playlist')}>
            {data[data.length - 1].name}
          </span>
        </Link>
      )
    }
  }
  console.log(renderData)

  return (
    <div className={cx('wrapper')}>
      {renderData}
      <div></div>
    </div>
  )
}

export default ArtistList