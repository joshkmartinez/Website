const Footer = ({ children, className }) => (
    <nav className={className}>
      {children}
      <style jsx>{`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 21px 21vw;
        display: flex;
        flex-direction: row;
        text-align: left;
  
        @media only screen and (max-width: 732px) {
          padding: 10px;
        }
      `}</style>
    </nav>
  )
  
  export default Footer
  