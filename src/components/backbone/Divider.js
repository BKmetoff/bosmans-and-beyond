import styled from 'styled-components'
import { Theme } from '../theme/Theme'

export const Divider = styled.div`
  margin: ${Theme.margin.M} 0 ${Theme.margin.S} 0;
  height: 1px;
  width: 40%;
  align-self: center;
  border-top: 1px solid ${Theme.colors.primary};
  box-shadow: ${Theme.shadow.M};

  @media (min-width: 768px) {
    display:none;
  }
`

