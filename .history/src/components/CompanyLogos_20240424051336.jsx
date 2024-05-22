

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautifull content at
      </h5>

      <ul className="flex">
        {CompanyLogos.map((logo, index) => (
          <li>
            <img
              src={logo}
              width={134}
              height={28}
            />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default CompanyLogos