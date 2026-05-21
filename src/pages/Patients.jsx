import { useState } from 'react'

export default function Patients() {

  const [search, setSearch] = useState('')

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-5">
        Patients
      </h1>

      <input
        type="text"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search patient"
        className="border p-3 rounded-lg w-full mb-5"
      />

      <div className="bg-white rounded-xl shadow p-5">
        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left p-3">
                ID
              </th>

              <th className="text-left p-3">
                Name
              </th>

              <th className="text-left p-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">P101</td>
              <td className="p-3">
                John Doe
              </td>
              <td className="p-3 text-green-600">
                Stable
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}
