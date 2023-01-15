'use client'

import toggles from './toggles'

const toggleNames = ['Classic', 'InnerMoon', 'Expand', 'Within', 'Around', 'DarkSide', 'Horizon']

export default function Index() {
  const Toggle = toggles[toggleNames[0]]
  return (
    <div>
      {toggleNames.map((name) => {
        const Toggle = toggles[name]
        return (
          <div className='text-4xl' key={name}>
            <h3>{name}</h3>
            <Toggle />
          </div>
        )
      })}
    </div>
  )
}
