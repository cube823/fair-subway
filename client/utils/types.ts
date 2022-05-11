export interface SubwayLineInfo {
  SearchSTNBySubwayLineInfo: {
    list_total_count: number
    RESULT: Result
    row: Subway[]
  }
}

export interface Result {
  CODE: string
  MESSAGE: string
}

export interface Subway {
  STATION_CD: string
  STATION_NM: string
  STATION_NM_ENG: string
  LINE_NUM: string
  FR_CODE: string
}
