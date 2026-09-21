import { Link } from 'react-router'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight
} from 'react-icons/fa'
import { Logo } from './Navbar'
import { nav } from '../data'
const cols = [
  [
    'Property Types',
    ['Residential', 'Commercial', 'Land & Plots', 'Apartments', 'Villas']
  ],
  ['Support', ['FAQ', 'Terms & Conditions', 'Privacy Policy', 'Help Center']]
]
export default function Footer() {
  return (
    <footer className="bg-brand-900 pb-6 pt-14 text-white/70">
      <div className="wrap">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Logo />
            <p className="mt-4 text-sm">Better homes, brighter futures.</p>
            <div className="mt-4 flex gap-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (I, k) => (
                  <a
                    key={k}
                    href="#"
                    aria-label="social"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-brand-900"
                  >
                    <I className="text-sm" />
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {nav.map(([n, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-gold">
                    {n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {cols.map(([h, l]) => (
            <div key={h}>
              <h4 className="mb-3 font-semibold text-white">{h}</h4>
              <ul className="space-y-2 text-sm">
                {l.map(x => (
                  <li key={x}>
                    <a href="#" className="hover:text-gold">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="mb-3 font-semibold text-white">Newsletter</h4>
            <p className="mb-3 text-sm">
              Get the latest updates and property trends.
            </p>
            <form
              onSubmit={e => e.preventDefault()}
              className="flex overflow-hidden rounded-full bg-white/10"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 text-sm outline-none placeholder:text-white/50"
              />
              <button
                aria-label="Subscribe"
                className="bg-gold px-4 text-brand-900"
              >
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-center text-xs">
          © 2026 Realestate.com. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
