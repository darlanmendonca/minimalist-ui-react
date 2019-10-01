import styled from '@emotion/styled'

export const Label = styled.label`
  font-family: Helvetica, sans-serif;
  font-size: 1.25em;
  display: block;
  pointer-events: none;
  transform-origin: left center;
  transition: transform .2s ease;
  transform: ${({ isSelected }) => isSelected
    ? 'translateY(0) scale(.8)'
    : 'translateY(1.5em)'
  };
  color: ${({ disabled }) => disabled
    ? '#dee2e6'
    : 'var(--text)'
  };

  ${({ validity }) => !validity.valid
    ? 'color: var(--invalid);'
    : ''
  }
`

export const Input = styled.input`
  border: 0;
  background: transparent;
  border-bottom: 1px solid var(--soft);
  font-family: Helvetica, sans-serif;
  display: block;
  outline: 0;
  line-height: 2em;
  font-size: 1.25em;
  transition: border-color .2s ease;
  margin-bottom: .5em;
  color: ${({ disabled }) => disabled
    ? '#dee2e6'
    : 'var(--text)'
  };

  &:focus {
    border-color: var(--strong);

    &::placeholder {color: #868e96}
  }

  &:focus, & {
    ${({ validity }) => !validity.valid
      ? 'border-color: var(--invalid);'
      : ''
    }
  }

  &::placeholder {
    transition: color .2s ease;
    color: transparent;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px var(--soft) inset;
    -webkit-text-fill-color: var(--text);
    transition: background-color 5000s ease-in-out 0s;
  }
`
