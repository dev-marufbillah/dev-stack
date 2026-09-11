import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const badgeColors = {
  Popular: 'text-blue-500 bg-blue-50',
  Versatile: 'text-emerald-500 bg-emerald-50',
  Fast: 'text-orange-500 bg-orange-50',
  Standard: 'text-gray-600 bg-gray-100',
  'Top SQL': 'text-blue-600 bg-blue-50',
  Cache: 'text-red-500 bg-red-50',
  Ubiquitous: 'text-yellow-600 bg-yellow-50',
  Essential: 'text-blue-500 bg-blue-50',
  Robust: 'text-blue-400 bg-blue-50',
  Modern: 'text-cyan-500 bg-cyan-50',
  Containers: 'text-blue-500 bg-blue-50',
  NoSQL: 'text-green-600 bg-green-50',
  Minimal: 'text-gray-600 bg-gray-100',
};

const Technologies = () => {
  const [techData, setTechData] = useState([]);
  const [stack, setStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch JSON');
        return res.json();
      })
      .then((data) => {
        setTechData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error loading data:', err);
        setIsLoading(false);
      });
  }, []);

  const handleAdd = (tech) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const item = stack.find((t) => t.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (item) toast.info(`${item.name} removed from stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error('All technologies removed from stack');
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white flex flex-col items-center justify-center min-h-87.5">
        <span className="loading loading-spinner loading-lg text-pink-600"></span>
        <p className="mt-4 text-gray-500 font-medium text-sm animate-pulse">
          Loading technologies...
        </p>
      </section>
    );
  }

  return (
    <section id="technologies" className="bg-white py-16">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-2 text-base sm:text-lg">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techData.map((tech) => {
              const isAdded = stack.some((item) => item.id === tech.id);
              const badgeClass = badgeColors[tech.badge] || 'text-gray-600 bg-gray-100';

              return (
                <div
                  key={tech.id}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-5">
                    <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain" />
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeClass}`}>
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">{tech.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed grow">{tech.description}</p>

                  <div className="flex flex-wrap items-center gap-4 mt-5 text-[11px] font-semibold text-gray-400">
                    <span>{tech.category}</span>
                    <span>{tech.difficulty}</span>
                    <span className="flex items-center gap-1 text-yellow-500 ml-auto">
                      ⭐ {tech.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(tech)}
                    disabled={isAdded}
                    className={`btn min-h-11 h-11 w-full mt-6 rounded-xl font-semibold text-sm border-none transition-all duration-300 ${
                      isAdded
                        ? 'btn-disabled bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-[#0f172a] text-white hover:bg-pink-600 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-1/4 lg:sticky lg:top-24 bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>

            {stack.length > 0 ? (
              <p className="text-sm text-gray-500 mt-1 mb-5">{stack.length} Technology Selected</p>
            ) : (
              <p className="text-sm text-gray-400 mt-1 mb-5">No technologies selected yet.</p>
            )}

            <div className="space-y-3 min-h-30">
              {stack.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-2xl p-6 flex items-center justify-center text-gray-400 text-sm font-medium h-24">
                  Your stack is empty.
                </div>
              ) : (
                stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-pink-200 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 leading-none">{item.name}</h4>
                        <p className="text-[11px] text-gray-500 mt-1">{item.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 px-2"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {stack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="btn min-h-11 h-11 w-full mt-6 rounded-xl font-semibold text-sm text-red-500 border border-red-100 bg-white hover:bg-red-50 hover:border-red-200 transition-colors"
              >
                Remove All
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;