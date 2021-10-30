import React, { useContext, useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { LocationContext } from '../../../services/location/location.context'

const SearchContainer = styled.View`
  padding: 30px 12px 0;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
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
