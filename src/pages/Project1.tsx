// src/pages/Project1.tsx
import ModalImage from "react-modal-image";

const Project1 = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Sustainable Cloud Resource Deployment</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Image 1 */}
        <div className="text-center">
          <img
            src="/Projects/Product Screenshot.png"
            alt="Real-Time Dashboard"
            className="rounded-lg w-full h-[500px] object-contain mx-auto shadow-lg bg-white"
          />
          <h2 className="text-2xl font-semibold mt-4 mb-2">Real-Time Energy Dashboard</h2>
          <p className="text-gray-600">
            A visual dashboard built using Electricity Maps API to show sustainable energy zones across Europe
            including wind, solar, hydro. Users can analyze fossil-free percentages and breakdowns.
          </p>
        </div>

        {/* Image 2 */}
        <div className="text-center">
          <img
            src="/Projects/UCC 2024 Architecture dia.png"
            alt="System Architecture"
            className="rounded-lg w-full h-[500px] object-contain mx-auto shadow-lg bg-white"
          />
          <h2 className="text-2xl font-semibold mt-4 mb-2">System Architecture Overview</h2>
          <p className="text-gray-600">
            Architecture diagram presented at IEEE UCC 2024 showcasing integration of APIs, AWS, and Terraform.
            The system captures energy context to deploy or replicate EC2 workloads dynamically.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Real-Time Energy Data Integration</strong> – Uses Electricity Maps API to fetch live energy mixes by region.</li>
          <li><strong>Region Prioritization</strong> – Deploy workloads based on region-level energy sustainability.</li>
          <li><strong>Automated Deployment</strong> – Terraform-based IaC provisioning optimized for energy-aware placement.</li>
          <li><strong>Edge Continuum Replication</strong> – Auto-replication of EC2 instances between zones for continuity.</li>
        </ul>
      </div>

      {/* Tables Section */}
      <div className="mb-8 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4">Deployment Statistics</h3>

        {/* Table 1 */}
        <div className="mb-6">
          <table className="w-full table-auto border border-gray-300 text-sm text-center">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="border px-3 py-2">AWS Region</th>
                <th className="border px-3 py-2">Renewable Energy (%)</th>
                <th className="border px-3 py-2">Fossil-Free Energy (%)</th>
                <th className="border px-3 py-2">Mean Deployment Time (minutes)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Stockholm (eu-north-1)", 76, 100, 3.2],
                ["Frankfurt (eu-central-1)", 41, 60, 2.9],
                ["Paris (eu-west-3)", 28, 97, 3.1],
                ["London (eu-west-2)", 28, 51, 3.4],
                ["Spain (eu-south-1)", 58, 87, 3.4],
                ["Milan (eu-south-2)", 49, 72, 3.2],
              ].map(([region, renewable, fossilFree, time], i) => (
                <tr key={i}>
                  <td className="border px-3 py-2">{region}</td>
                  <td className="border px-3 py-2">{renewable}%</td>
                  <td className="border px-3 py-2">{fossilFree}%</td>
                  <td className="border px-3 py-2">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="mb-4">
          <table className="w-full table-auto border border-gray-300 text-sm text-center">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="border px-3 py-2">Source Region</th>
                <th className="border px-3 py-2">Target Region</th>
                <th className="border px-3 py-2">Renewable Energy (%)</th>
                <th className="border px-3 py-2">Replication Time (minutes)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Frankfurt (eu-central-1)", "Stockholm (eu-north-1)", 76, 4.5],
                ["Paris (eu-west-3)", "Spain (eu-south-1)", 58, 4.1],
                ["London (eu-west-2)", "Milan (eu-south-2)", 49, 4.3],
              ].map(([source, target, renewable, time], i) => (
                <tr key={i}>
                  <td className="border px-3 py-2">{source}</td>
                  <td className="border px-3 py-2">{target}</td>
                  <td className="border px-3 py-2">{renewable}%</td>
                  <td className="border px-3 py-2">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 text-sm mt-2">
          The above results show how energy-aware deployment and replication significantly reduce environmental impact while maintaining rapid provisioning across selected AWS regions.
        </p>
      </div>

      {/* Outcomes */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Outcomes</h3>
        <p className="text-gray-700">
          Demonstrated efficient cloud deployment with reduced carbon footprint by leveraging greener regions like Stockholm
          and Spain. EC2 workloads were deployed or replicated across zones in under 5 minutes.
        </p>
      </div>

      <div className="mb-8 text-sm text-gray-600 italic text-center">
  Presented at IEEE UCC 2024 | Published in IEEE Xplore
  <div className="mt-4">
    <a
      href="https://ieeexplore.ieee.org/document/10971841" // Replace with your actual IEEE link if different
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
    >
      View Published Paper
    </a>
  </div>
</div>

      {/* GitHub */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/khalandar55/Sustainable-cloud-Resource-Deployment"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          View GitHub Repository
        </a>
        <p className="mt-2 text-sm text-gray-500">Public repo — forks and contributions welcome</p>
      </div>
    </div>
  );
};

export default Project1;
