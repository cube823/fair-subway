import FramerFlex from 'client/component/FramerFlex'
import { Subway } from 'client/utils/types'

const HomePage = ({ subways }: { subways: Subway[] }): JSX.Element => {
  console.log(
    'subways',
    subways.filter((s) => s.STATION_CD.startsWith('02')),
  )

  return <FramerFlex></FramerFlex>
}

export default HomePage
