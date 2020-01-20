const Icon = ({ Icon, color = 'black' }) => (
  <div>
    <Icon color={color} />
    <style jsx>{`
      display: inline-block;

      svg {
        width: 1em;
        height: 1em;
        transform: scale(1.2);
        margin-right: 2px;
        position: relative;
        top: 2px;
      }
    `}</style>
  </div>
)

export default Icon
