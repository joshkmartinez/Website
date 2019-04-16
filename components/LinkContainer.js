const LinkContainer = ({ children, className }) => (
  <nav className={className}>
    {children}
    <style jsx>{`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 13px 16vw;
      display: flex;
      flex-direction: row;
      text-align: left;

      @media only screen and (max-width: 732px) {
        padding: 10px;
      }
    `}</style>
  </nav>
)

export default LinkContainer
