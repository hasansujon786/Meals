import React, { useContext, useState, useEffect } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { LocationContext } from '../../../services/location/location.context'

const SearchContainer = styled.View`
  margin: 0 12px;
`

const Search = () => {
  const { search, keyword } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  useEffect(() => {
    setSearchKeyword(keyword)
  }, [keyword])

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search a location'
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </SearchContainer>
  )
}

export default Search
