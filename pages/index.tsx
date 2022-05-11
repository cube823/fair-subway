import HomePage from 'client/pages'
import { fetchOnServer } from 'client/utils/fetcher'
import { SubwayLineInfo } from 'client/utils/types'
import { GetServerSideProps } from 'next'

export const getServerSideProps = async () => {
  const response = await fetchOnServer<SubwayLineInfo>(1, 753)
  console.log('response', response.SearchSTNBySubwayLineInfo.row)

  return { props: { subways: response.SearchSTNBySubwayLineInfo.row } }
}

export default HomePage
