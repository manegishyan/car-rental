const navList = [ 
    { 
        path: "/become-a-renter",
        label: 'Become a renter'
    },
    { 
        path: '/rental-deals',
        label: 'Rental deals'
    },
    { 
        path: '/how-it-works',
        label: 'How it work'
    },
    { 
        path: '/why-choose-us',
        label: 'Why choose us'
    },
]

export const Navbar = ({menuIsOpen}) => {
  const className  = menuIsOpen ? 'navbar' : 'navbar closed'

  return (
    <nav className={`navbar ${menuIsOpen ? 'open' : ''}`}>

        <ul className="nav-list">
            {navList.map((item) => (
                <li key={item.label}>
                    <a href={item.path}>{item.label}</a>
                </li>
            ))}
        </ul>

    </nav>
  )
}
