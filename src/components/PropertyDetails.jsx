import { Link, useParams } from 'react-router'
import {
  ArrowLeft,
  ArrowUpRight,
  Bath,
  BedDouble,
  CheckCircle2,
  Heart,
  Home,
  MapPin,
  Maximize,
  Phone,
  Share2,
  Star
} from 'lucide-react'
import { properties } from '../data'
import { useState } from 'react'

const PropertyDetails = () => {
  const { id } = useParams()

  const [isFavorite, setIsFavorite] = useState(false)

  // Convert URL id to the same type as your data id
  const property = properties.find(item => String(item.id) === String(id))

  // Property not found
  if (!property) {
    return (
      <main className="min-h-screen bg-[#f7f9f7] px-5 py-32">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-[#08745e]">
            <Home size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Property Not Found
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-slate-500">
            We couldn't find the property you're looking for. It may have been
            removed or the URL may be incorrect.
          </p>

          <Link
            to="/properties"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#063f35] px-6 py-3 font-semibold text-white transition hover:bg-[#08745e]"
          >
            <ArrowLeft size={18} />
            Back to Properties
          </Link>
        </div>
      </main>
    )
  }

  const formatPrice = () => {
    if (property.status === 'For Rent') {
      return `$${property.price.toLocaleString()}/month`
    }

    return `$${property.price.toLocaleString()}`
  }

  return (
    <main className="min-h-screen bg-[#f7f9f7] text-slate-900">
      <section className="w-full h-20 bg-brand-900/95"></section>
      {/* Back Navigation */}
      <section className='pt-8'>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-[#08745e]"
          >
            <ArrowLeft size={17} />
            Back to Properties
          </Link>
        </div>
      </section>

      {/* Property Image */}
      <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[1rem] bg-slate-200">
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="h-[350px] w-full object-cover sm:h-[480px] lg:h-[600px]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

          {/* Status */}
          <div className="absolute left-5 top-5 flex flex-wrap gap-2 sm:left-7 sm:top-7">
            <span className="rounded-full bg-[#063f35] px-4 py-2 text-xs font-bold text-white shadow-lg">
              {property.status}
            </span>

            {property.featured && (
              <span className="flex items-center gap-1 rounded-full bg-yellow-300 px-4 py-2 text-xs font-bold text-[#063f35]">
                <Star size={13} />
                Featured
              </span>
            )}
          </div>

          {/* Image Actions */}
          <div className="absolute right-5 top-5 flex gap-2 sm:right-7 sm:top-7">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:scale-105"
            >
              <Heart
                size={19}
                className={isFavorite ? 'fill-red-500 text-red-500' : ''}
              />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:scale-105">
              <Share2 size={18} />
            </button>
          </div>

          {/* Image Bottom Info */}
          <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8">
            <p className="mb-2 text-sm font-medium text-emerald-200">
              {property.type}
            </p>

            <h1 className="max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">
              {property.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
              <MapPin size={17} />
              {property.location}
            </div>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Price + Rating */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm text-slate-400">
                    {property.status === 'For Rent'
                      ? 'Monthly price'
                      : 'Property price'}
                  </p>

                  <h2 className="mt-1 text-3xl font-bold text-[#063f35] sm:text-4xl">
                    {formatPrice()}
                  </h2>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-yellow-50 px-4 py-3 text-yellow-600">
                  <Star className="fill-yellow-400 text-yellow-400" size={18} />

                  <span className="font-bold">{property.rating}</span>

                  <span className="text-xs text-yellow-600">Rating</span>
                </div>
              </div>

              {/* Specs */}
              <div className="mt-7 grid grid-cols-2 gap-3 border-t border-slate-100 pt-6 sm:grid-cols-3">
                {property.beds > 0 && (
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <BedDouble size={21} className="text-[#08745e]" />

                    <p className="mt-2 text-lg font-bold">{property.beds}</p>

                    <p className="text-xs text-slate-400">Bedrooms</p>
                  </div>
                )}

                {property.baths > 0 && (
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Bath size={21} className="text-[#08745e]" />

                    <p className="mt-2 text-lg font-bold">{property.baths}</p>

                    <p className="text-xs text-slate-400">Bathrooms</p>
                  </div>
                )}

                <div className="rounded-2xl bg-slate-50 p-4">
                  <Maximize size={21} className="text-[#08745e]" />

                  <p className="mt-2 text-lg font-bold">
                    {property.area.toLocaleString()}
                  </p>

                  <p className="text-xs text-slate-400">Square Feet</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">About This Property</h2>

              <p className="mt-4 leading-7 text-slate-500">
                {property.description ||
                  `Discover this beautiful ${property.type.toLowerCase()} located in ${property.location}. This property offers a comfortable living experience with modern design, excellent features and a convenient location.`}
              </p>
            </div>

            {/* Features */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">Property Features</h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {(
                  property.amenities || [
                    'Modern Architecture',
                    'Premium Location',
                    'Secure Environment',
                    'Quality Construction',
                    'Spacious Interior',
                    'Natural Lighting'
                  ]
                ).map(feature => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#08745e]"
                    />

                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-400">
                Interested in this property?
              </p>

              <h3 className="mt-2 text-2xl font-bold">Schedule a Viewing</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Contact our property expert to learn more about this property or
                schedule a private viewing.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#063f35] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#08745e]"
                >
                  <Phone size={18} />
                  Contact Agent
                </Link>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:border-[#08745e] hover:text-[#08745e]">
                  <ArrowUpRight size={18} />
                  Request Details
                </button>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#08745e]"
                />

                <div>
                  <p className="text-sm font-semibold text-[#063f35]">
                    Verified Property
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Property information has been verified by our real estate
                    team.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default PropertyDetails
