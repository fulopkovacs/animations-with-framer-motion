import * as ToggleGroup from '@radix-ui/react-toggle-group'
import {useState} from 'react'
import {GridIcon, RowsIcon} from '@radix-ui/react-icons'
import {motion} from 'framer-motion'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

function App() {
  const [assetsLayout, setAssetsLayout] = useState<'grid' | 'rows'>('grid')

  const itemsCount = 7
  const itemsArray = []
  for (let i = 0; i < itemsCount; i++) {
    itemsArray.push(i)
  }

  return (
    <div className="App w-full h-full bg-gray-900 min-h-screen flex items-center gap-4 flex-col pt-10">
      <div className="text-gray-500 relative">
        <div
          className={`absolute top-0 left-0 h-full w-full flex pointer-events-none ${
            assetsLayout === 'grid' ? 'justify-start' : 'justify-end'
          }`}
        >
          <motion.div
            layout
            className="aspect-square h-full bg-gray-600 opacity-80 rounded-sm"
          ></motion.div>
        </div>
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
            <div className="h-5 w-5 relative m-1">
              <GridIcon className="absolute top-0 left-0 h-full w-full" />
            </div>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="rows"
            aria-label="rows"
            className="transition-colors data-[state=on]:text-yellow-300"
          >
            <div className="h-5 w-5 relative m-1">
              <RowsIcon className="absolute top-0 left-0 h-full w-full" />
            </div>
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
      <div
        className={`text-black font-bold grid gap-2 ${
          assetsLayout === 'grid' ? 'grid-cols-3' : 'grid-cols-1'
        }`}
      >
        {itemsArray.map((val) => (
          <motion.div
            layout
            transition={spring}
            key={val}
            className="w-10 h-10 bg-yellow-300 flex justify-center items-center rounded-sm"
          >
            {val}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default App
