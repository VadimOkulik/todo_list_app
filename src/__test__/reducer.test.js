import reducer, { addTodos } from './redux/reducer';


test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual([
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
  ])
})

test('should handle a todo being added to an empty list', () => {
  const previousState = []
  expect(reducer(previousState, addTodos('Run the tests'))).toEqual([
    {
      text: 'Run the tests',
      completed: false,
      id: 0
    }
  ])
})

test('should handle a todo being added to an existing list', () => {
  const previousState = [
    {
      text: 'Run the tests',
      completed: true,
      id: 0
    }
  ]
  expect(reducer(previousState, addTodos('Use Redux'))).toEqual([
    {
      text: 'Run the tests',
      completed: true,
      id: 0
    },
    {
      text: 'Use Redux',
      completed: false,
      id: 1
    }
  ])
})

// test('should handle a todo being added to an empty list', () => {
//     const previousState = []
//     expect(reducer(previousState, removeTodos('Run the tests'))).toEqual([
//       {
//         text: 'Run the tests',
//         completed: false,
//         id: 0
//       }
//     ])
//   })

//   test('should handle a todo being added to an existing list', () => {
//     const previousState = [
//       {
//         text: 'Run the tests',
//         completed: true,
//         id: 0
//       }
//     ]
//     expect(reducer(previousState, removeTodos('Use Redux'))).toEqual([
//       {
//         text: 'Run the tests',
//         completed: true,
//         id: 0
//       },
//       {
//         text: 'Use Redux',
//         completed: false,
//         id: 1
//       }
//     ])
//   })

//   test('should handle a todo being added to an empty list', () => {
//     const previousState = []
//     expect(reducer(previousState, updateTodos('Run the tests'))).toEqual([
//       {
//         text: 'Run the tests',
//         completed: false,
//         id: 0
//       }
//     ])
//   })

//   test('should handle a todo being added to an existing list', () => {
//     const previousState = [
//       {
//         text: 'Run the tests',
//         completed: true,
//         id: 0
//       }
//     ]
//     expect(reducer(previousState, updateTodos('Use Redux'))).toEqual([
//       {
//         text: 'Run the tests',
//         completed: true,
//         id: 0
//       },
//       {
//         text: 'Use Redux',
//         completed: false,
//         id: 1
//       }
//     ])
//   })

//   test('should handle a todo being added to an empty list', () => {
//       const previousState = []
//       expect(reducer(previousState, completeTodos('Run the tests'))).toEqual([
//         {
//           text: 'Run the tests',
//           completed: false,
//           id: 0
//         }
//       ])
//     })

//     test('should handle a todo being added to an existing list', () => {
//       const previousState = [
//         {
//           text: 'Run the tests',
//           completed: true,
//           id: 0
//         }
//       ]
//       expect(reducer(previousState, completeTodos('Use Redux'))).toEqual([
//         {
//           text: 'Run the tests',
//           completed: true,
//           id: 0
//         },
//         {
//           text: 'Use Redux',
//           completed: false,
//           id: 1
//         }
//       ])
//     })

