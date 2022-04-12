import styled from "styled-components"

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loading = () => {
  return (
    <LoadingContainer>
      Loading the Universe...
    </LoadingContainer>
  )
}