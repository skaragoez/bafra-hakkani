interface EventCardProps {
  title: string;
  description: string;
  schedule?: string;
  recurring?: boolean;
  type?: string;
  details?: {
    includes?: string[];
    participation?: string;
  };
}

export default function EventCard({
  title,
  description,
  schedule,
  recurring = false,
  type,
  details,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-dernek-cream group">
      {/* Header with colored accent */}
      <div className="bg-gradient-to-r from-dernek-turquoise to-dernek-green p-1">
        <div className="bg-white p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-heading font-semibold text-dernek-blue mb-2 group-hover:text-dernek-turquoise transition-colors duration-300">
                {title}
              </h3>
              {schedule && (
                <div className="flex items-center text-sm text-dernek-green mb-3">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-medium">{schedule}</span>
                </div>
              )}
            </div>
            {recurring && (
              <div className="ml-4">
                <span className="inline-flex items-center rounded-full bg-dernek-turquoise/10 px-3 py-1 text-xs font-medium text-dernek-turquoise border border-dernek-turquoise/20">
                  Düzenli
                </span>
              </div>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            {description}
          </p>

          {details?.includes && details.includes.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-dernek-blue mb-2">Program İçeriği:</h4>
              <div className="flex flex-wrap gap-2">
                {details.includes.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-dernek-green/10 text-dernek-green border border-dernek-green/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {details?.participation && (
            <div className="mt-4 pt-4 border-t border-dernek-cream">
              <p className="text-sm text-dernek-turquoise font-medium">
                {details.participation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
