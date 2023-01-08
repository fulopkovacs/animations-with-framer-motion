import * as ToggleGroup from '@radix-ui/react-toggle-group'
import {useState} from 'react'
import {GridIcon, RowsIcon} from '@radix-ui/react-icons'

function App() {
  const [assetsLayout, setAssetsLayout] = useState<'grid' | 'rows'>('grid')

  const itemsCount = 7
  const itemsArray = []
  for (let i = 0; i < itemsCount; i++) {
    itemsArray.push(i)
  }

  return (
    <div className="App w-full h-full bg-gray-900 min-h-screen flex items-center justify-center gap-4 flex-col">
      <div className="text-gray-500">
        <ToggleGroup.Root
          type="single"
          defaultValue="grid"
          aria-label="display assets in a grid or in rows"
          value={assetsLayout}
          onValueChange={(value: 'grid' | 'rows') => {
            if (value) setAssetsLayout(value)
          }}
          className="flex gap-2"
        >
          <ToggleGroup.Item
            value="grid"
            aria-label="grid"
            className="transition-colors data-[state=on]:text-yellow-300"
          >
            <GridIcon className="h-5 w-5" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="rows"
            aria-label="rows"
            className="transition-colors data-[state=on]:text-yellow-300"
          >
            <RowsIcon className="h-5 w-5" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
      <div className="text-black font-bold grid grid-cols-3 gap-2">
        {itemsArray.map((val) => (
          <div
            key={val}
            className="w-10 h-10 bg-yellow-300 flex justify-center items-center rounded-sm"
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
