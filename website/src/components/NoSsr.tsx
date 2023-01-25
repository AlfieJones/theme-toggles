import dynamic from 'next/dynamic'

const NoSsr = ({ children }) => <>{children}</>

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
