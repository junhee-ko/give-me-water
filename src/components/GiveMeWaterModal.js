import React from 'react'
import {Button, Modal} from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return {open: false}
    case 'open':
      return {open: true, size: action.size}
    default:
      throw new Error('Unsupported action...')
  }
}

const GiveMeWaterModal = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const {open, size} = state

  return (
    <>
      <Button onClick={() => dispatch({type: 'open', size: 'mini'})}>
        물죠 !
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({type: 'close'})}
      >
        <Modal.Header>물을 주시겠어요 ??</Modal.Header>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({type: 'close'})}>
            No
          </Button>
          <Button positive onClick={() => dispatch({type: 'close'})}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default GiveMeWaterModal
