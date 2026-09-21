import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {properties} from "../data"

import {
  Search,
  MapPin,
  SlidersHorizontal,
  ChevronDown,
  Heart,
  ArrowUpRight,
  BedDouble,
  Bath,
  Maximize,
  Home,
  Building2,
  Trees,
  X,
  Sparkles,
  CheckCircle2,
  Grid3X3,
  List,
} from "lucide-react";

import {
  FaDollarSign,
  FaRegBuilding,
  FaHouse,
  FaStar,
} from "react-icons/fa6";


const propertyTypes = [
  {
    name: "All Properties",
    icon: <FaRegBuilding />,
  },
  {
    name: "House",
    icon: <FaHouse />,
  },
  {
    name: "Villa",
    icon: <Home size={17} />,
  },
  {
    name: "Apartment",
    icon: <Building2 size={17} />,
  },
  {
    name: "Land",
    icon: <Trees size={17} />,
  },
  {
    name: "Commercial",
    icon: <FaRegBuilding />,
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const PropertiesFeature = () => {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All Properties");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };


  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.type.toLowerCase().includes(query)
      );
    }

    // Property Type
    if (activeType !== "All Properties") {
      result = result.filter(
        (property) => property.type === activeType
      );
    }

    // Status
    if (status !== "All") {
      result = result.filter(
        (property) => property.status === status
      );
    }

    // Sort
    if (sort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "Highest Rated") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "Featured") {
      result.sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      );
    }

    return result;
  }, [search, activeType, status, sort]);


  const formatPrice = (price, status) => {
    if (status === "For Rent") {
      return `$${price.toLocaleString()}/month`;
    }

    return `$${price.toLocaleString()}`;
  };


  return (
    <main className="min-h-screen bg-[#f7f9f7] text-slate-900">

      <section className="relative overflow-hidden bg-[#063f35]">

        {/* Background decoration */}

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-32">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-emerald-100 backdrop-blur">
                <Sparkles size={15} className="text-yellow-300" />

                Premium Property Collection
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Find a Property
                <span className="block text-yellow-300">
                  You'll Love.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-emerald-50/70 sm:text-lg">
                Explore premium homes, luxury villas, modern
                apartments and investment opportunities from
                trusted real estate professionals.
              </p>

              {/* Search */}

              <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-md sm:flex-row">

                <div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-4 py-3">

                  <Search
                    size={20}
                    className="shrink-0 text-[#08745e]"
                  />

                  <input
                    type="text"
                    placeholder="Search city, property or location..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />

                </div>

                <button
                  onClick={() => setShowFilters(true)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-yellow-300 px-6 py-3 font-semibold text-[#063f35] transition hover:bg-yellow-200"
                >
                  <SlidersHorizontal size={18} />

                  Filters
                </button>

              </div>

            </motion.div>


            {/* RIGHT IMAGE */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >

              <div className="absolute -inset-5 rounded-[2rem] bg-emerald-300/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">

                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                  alt="Luxury property"
                  className="h-[430px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#063f35]/70 via-transparent to-transparent" />

                {/* Floating card */}

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-slate-500">
                        Featured Property
                      </p>

                      <h3 className="mt-1 font-bold text-slate-900">
                        Ocean View Residence
                      </h3>

                      <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <MapPin size={13} />
                        Malibu, California
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-[#08745e]">
                        $2.85M
                      </p>

                      <div className="mt-1 flex items-center justify-end gap-1 text-xs">
                        <FaStar className="text-yellow-400" />
                        4.9
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">

          {[
            ["10,000+", "Properties"],
            ["2,500+", "Verified Agents"],
            ["35+", "Cities"],
            ["98%", "Happy Clients"],
          ].map(([number, label], index) => (

            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="px-4 py-6 text-center sm:py-8"
            >

              <h3 className="text-2xl font-bold text-[#063f35] sm:text-3xl">
                {number}
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {label}
              </p>

            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >

          <div>

            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#08745e]">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              EXPLORE PROPERTIES
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Handpicked Properties
              <span className="block text-[#08745e]">
                Just For You
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Discover beautiful homes and investment opportunities
              selected from our premium property collection.
            </p>

          </div>


          {/* View */}

          <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white p-1 shadow-sm lg:self-auto">

            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-lg p-2 transition ${
                viewMode === "grid"
                  ? "bg-[#063f35] text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Grid3X3 size={18} />
            </button>

            <button
              onClick={() => setViewMode("list")}
              className={`rounded-lg p-2 transition ${
                viewMode === "list"
                  ? "bg-[#063f35] text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </motion.div>
        <div className="mt-10 flex flex-col gap-4">

          {/* Type tabs */}

          <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">

            {propertyTypes.map((type) => (

              <button
                key={type.name}
                onClick={() => setActiveType(type.name)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  activeType === type.name
                    ? "bg-[#063f35] text-white shadow-lg shadow-emerald-900/10"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:text-[#08745e]"
                }`}
              >

                {type.icon}

                {type.name}

              </button>

            ))}

          </div>


          {/* Filter controls */}

          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center">

            {/* Status */}

            <div className="relative flex-1">

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full appearance-none rounded-xl bg-slate-50 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-emerald-100"
              >
                <option value="All">
                  All Status
                </option>

                <option value="For Sale">
                  For Sale
                </option>

                <option value="For Rent">
                  For Rent
                </option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

            </div>


            {/* Sort */}

            <div className="relative flex-1">

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full appearance-none rounded-xl bg-slate-50 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-emerald-100"
              >

                <option value="Featured">
                  Featured
                </option>

                <option value="Price: Low to High">
                  Price: Low to High
                </option>

                <option value="Price: High to Low">
                  Price: High to Low
                </option>

                <option value="Highest Rated">
                  Highest Rated
                </option>

              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

            </div>


            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition hover:border-[#08745e] hover:text-[#08745e]"
            >
              <SlidersHorizontal size={17} />

              More Filters
            </button>

          </div>

        </div>

        <div className="mt-8 flex items-center justify-between">

          <p className="text-sm text-slate-500">

            Showing{" "}

            <span className="font-semibold text-slate-800">
              {filteredProperties.length}
            </span>{" "}

            properties

          </p>

          <Link
            to="/properties"
            className="hidden text-sm font-semibold text-[#08745e] sm:block"
          >
            View all properties →
          </Link>

        </div>

        {filteredProperties.length > 0 ? (

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`mt-6 grid gap-5 ${
              viewMode === "grid"
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >

            {filteredProperties.map((property) => (

              <motion.article
                key={property.id}
                variants={cardVariants}
                layout
                className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-xl ${
                  viewMode === "list"
                    ? "flex flex-col md:flex-row"
                    : ""
                }`}
              >

                {/* IMAGE */}

                <div
                  className={`relative overflow-hidden ${
                    viewMode === "list"
                      ? "h-64 md:h-auto md:w-[40%]"
                      : "h-60"
                  }`}
                >

                  <img
                    src={property.image}
                    alt={property.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />


                  {/* Status */}

                  <div className="absolute left-4 top-4 flex gap-2">

                    <span className="rounded-full bg-[#063f35] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                      {property.status}
                    </span>

                    {property.featured && (
                      <span className="flex items-center gap-1 rounded-full bg-yellow-300 px-3 py-1.5 text-xs font-bold text-[#063f35]">
                        <Sparkles size={12} />
                        Featured
                      </span>
                    )}

                  </div>


                  {/* Favorite */}

                  <button
                    onClick={() =>
                      toggleFavorite(property.id)
                    }
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:scale-110"
                  >

                    <Heart
                      size={18}
                      className={
                        favorites.includes(property.id)
                          ? "fill-red-500 text-red-500"
                          : ""
                      }
                    />

                  </button>


                  {/* Bottom location */}

                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs font-medium text-white">
                    <MapPin size={14} />
                    {property.location}
                  </div>

                </div>


                {/* CONTENT */}

                <div className="flex flex-1 flex-col p-5">

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <p className="mb-1 text-xs font-medium text-[#08745e]">
                        {property.type}
                      </p>

                      <h3 className="line-clamp-1 text-lg font-bold text-slate-900 transition group-hover:text-[#08745e]">
                        {property.title}
                      </h3>

                    </div>


                    <div className="flex shrink-0 items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">

                      <FaStar />

                      {property.rating}

                    </div>

                  </div>


                  {/* Property specs */}

                  <div className="mt-5 flex flex-wrap gap-4 border-y border-slate-100 py-4 text-xs text-slate-500">

                    {property.beds > 0 && (
                      <div className="flex items-center gap-1.5">
                        <BedDouble size={16} />
                        {property.beds} Beds
                      </div>
                    )}

                    {property.baths > 0 && (
                      <div className="flex items-center gap-1.5">
                        <Bath size={15} />
                        {property.baths} Baths
                      </div>
                    )}

                    <div className="flex items-center gap-1.5">
                      <Maximize size={15} />
                      {property.area.toLocaleString()} ft²
                    </div>

                  </div>


                  {/* Price + button */}

                  <div className="mt-auto flex items-end justify-between gap-3 pt-5">

                    <div>

                      <p className="text-xs text-slate-400">
                        {property.status === "For Rent"
                          ? "Monthly price"
                          : "Starting price"}
                      </p>

                      <p className="mt-1 text-xl font-bold text-[#063f35]">
                        {formatPrice(
                          property.price,
                          property.status
                        )}
                      </p>

                    </div>


                    <Link
                      to={`/properties/${property.id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#063f35] text-white transition hover:bg-[#08745e] hover:shadow-lg"
                    >
                      <ArrowUpRight size={18} />
                    </Link>

                  </div>

                </div>

              </motion.article>

            ))}

          </motion.div>

        ) : (

          /* EMPTY STATE */

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-[#08745e]">
              <Home size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              No properties found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Try changing your search keyword, property type,
              or status filter.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveType("All Properties");
                setStatus("All");
              }}
              className="mt-6 rounded-xl bg-[#063f35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#08745e]"
            >
              Clear Filters
            </button>

          </motion.div>

        )}

        {filteredProperties.length > 0 && (

          <div className="mt-12 flex justify-center">

            <button className="group flex items-center gap-2 rounded-xl border border-[#063f35] px-7 py-3.5 text-sm font-semibold text-[#063f35] transition hover:bg-[#063f35] hover:text-white">

              Load More Properties

              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </button>

          </div>

        )}

      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-[#063f35] px-6 py-12 sm:px-10 lg:px-16 lg:py-14"
        >

          {/* Decorations */}

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />


          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-yellow-300">
                <Sparkles size={16} />
                FIND YOUR NEXT HOME
              </div>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Your Dream Property
                <span className="text-yellow-300">
                  {" "}Is Just a Click Away!
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-emerald-50/70 sm:text-base">
                Can't find what you're looking for?
                Contact our property experts and we'll help
                you find the perfect property.
              </p>

            </div>


            <Link
              to="/contact"
              className="shrink-0 rounded-xl bg-yellow-300 px-6 py-3.5 text-sm font-bold text-[#063f35] transition hover:bg-yellow-200 hover:shadow-xl"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </section>


      <AnimatePresence>

        {showFilters && (

          <>

            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm"
            />


            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 280,
              }}
              className="fixed right-0 top-0 z-[1000] h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl"
            >

              {/* Header */}

              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-[#08745e]">
                    Property Search
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Filter Properties
                  </h3>

                </div>

                <button
                  onClick={() => setShowFilters(false)}
                  className="rounded-xl bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200"
                >
                  <X size={20} />
                </button>

              </div>


              {/* Filter content */}

              <div className="space-y-7 p-6">

                {/* Location */}

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Location
                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">

                    <MapPin
                      size={18}
                      className="text-[#08745e]"
                    />

                    <input
                      type="text"
                      placeholder="City or location"
                      className="w-full text-sm outline-none"
                    />

                  </div>

                </div>


                {/* Property type */}

                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    Property Type
                  </label>

                  <div className="grid grid-cols-2 gap-2">

                    {propertyTypes.slice(1).map((type) => (

                      <button
                        key={type.name}
                        onClick={() => {
                          setActiveType(type.name);
                          setShowFilters(false);
                        }}
                        className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-sm transition ${
                          activeType === type.name
                            ? "border-[#063f35] bg-[#063f35] text-white"
                            : "border-slate-200 text-slate-600 hover:border-emerald-300"
                        }`}
                      >
                        {type.icon}
                        {type.name}
                      </button>

                    ))}

                  </div>

                </div>


                {/* Status */}

                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    Property Status
                  </label>

                  <div className="grid grid-cols-2 gap-2">

                    {["All", "For Sale", "For Rent"].map(
                      (item) => (

                        <button
                          key={item}
                          onClick={() => setStatus(item)}
                          className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                            status === item
                              ? "border-[#063f35] bg-[#063f35] text-white"
                              : "border-slate-200 text-slate-600 hover:border-emerald-300"
                          }`}
                        >
                          {item}
                        </button>

                      )
                    )}

                  </div>

                </div>


                {/* Price */}

                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    Price Range
                  </label>

                  <div className="grid grid-cols-2 gap-3">

                    <div className="flex items-center rounded-xl border border-slate-200 px-3">

                      <FaDollarSign
                        size={12}
                        className="text-slate-400"
                      />

                      <input
                        type="number"
                        placeholder="Min"
                        className="w-full px-2 py-3 text-sm outline-none"
                      />

                    </div>

                    <div className="flex items-center rounded-xl border border-slate-200 px-3">

                      <FaDollarSign
                        size={12}
                        className="text-slate-400"
                      />

                      <input
                        type="number"
                        placeholder="Max"
                        className="w-full px-2 py-3 text-sm outline-none"
                      />

                    </div>

                  </div>

                </div>


                {/* Amenities */}

                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    Amenities
                  </label>

                  <div className="space-y-3">

                    {[
                      "Swimming Pool",
                      "Parking",
                      "Garden",
                      "Ocean View",
                      "Security",
                    ].map((item) => (

                      <label
                        key={item}
                        className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-slate-300 accent-[#063f35]"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Apply */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#063f35] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#08745e]"
                >
                  <CheckCircle2 size={18} />
                  Apply Filters
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default PropertiesFeature;
