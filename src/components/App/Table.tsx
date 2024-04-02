import {
  HStack,
  Text,
  VStack,
  Table as ChakraTable,
  Thead,
  Tbody,
  Box,
  Tr,
  Td,
  Th,
  Icon,
  Button,
} from '@chakra-ui/react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
const CheckMarkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9"
      stroke="rgba(48, 204, 136, 1)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8.5 9.5L12 13L21.0002 3"
      stroke="rgba(48, 204, 136, 1)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.6665 3.33335C4.6665 2.96516 4.96498 2.66669 5.33317 2.66669L13.3332 2.66669C13.7014 2.66669 13.9998 2.96516 13.9998 3.33335C13.9998 3.70154 13.7014 4.00002 13.3332 4.00002L5.33317 4.00002C4.96498 4.00002 4.6665 3.70154 4.6665 3.33335Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3.33335C2 2.96516 2.29714 2.66669 2.66369 2.66669H2.66965C3.03619 2.66669 3.33333 2.96516 3.33333 3.33335C3.33333 3.70154 3.03619 4.00002 2.66965 4.00002H2.66369C2.29714 4.00002 2 3.70154 2 3.33335Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8.00004C2 7.63185 2.29714 7.33337 2.66369 7.33337H2.66965C3.03619 7.33337 3.33333 7.63185 3.33333 8.00004C3.33333 8.36823 3.03619 8.66671 2.66965 8.66671H2.66369C2.29714 8.66671 2 8.36823 2 8.00004Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12.6667C2 12.2985 2.29714 12 2.66369 12H2.66965C3.03619 12 3.33333 12.2985 3.33333 12.6667C3.33333 13.0349 3.03619 13.3333 2.66965 13.3333H2.66369C2.29714 13.3333 2 13.0349 2 12.6667Z"
      fill="white"
    />
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.6665 8.00004C4.6665 7.63185 4.96498 7.33337 5.33317 7.33337L13.3332 7.33337C13.7014 7.33337 13.9998 7.63185 13.9998 8.00004C13.9998 8.36823 13.7014 8.66671 13.3332 8.66671L5.33317 8.66671C4.96498 8.66671 4.6665 8.36823 4.6665 8.00004Z"
      fill="white"
    />
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.6665 12.6667C4.6665 12.2985 4.96498 12 5.33317 12L13.3332 12C13.7014 12 13.9998 12.2985 13.9998 12.6667C13.9998 13.0349 13.7014 13.3333 13.3332 13.3333L5.33317 13.3333C4.96498 13.3333 4.6665 13.0349 4.6665 12.6667Z"
      fill="white"
    />
  </svg>
)
export const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33334 13.3334L7.33318 3.33338C7.33318 2.96519 7.63165 2.6667 7.99984 2.6667C8.36803 2.66669 8.66651 2.96516 8.66651 3.33335L8.66668 13.3334C8.66668 13.7016 8.36821 14 8.00002 14C7.63183 14 7.33335 13.7016 7.33334 13.3334Z"
      fill="#B3B3B5"
    />
    <path
      d="M11.7947 6.48127C11.5289 6.73605 11.1069 6.72713 10.8521 6.46133L8 3.48602L5.14793 6.46133C4.89315 6.72713 4.47113 6.73605 4.20533 6.48127C3.93954 6.22648 3.93061 5.80446 4.1854 5.53867L7.06585 2.53374C7.16004 2.43535 7.27165 2.31878 7.38068 2.23199C7.51107 2.12821 7.71775 2 8 2C8.28224 2 8.48893 2.12821 8.61932 2.23199C8.72835 2.31878 8.83995 2.43535 8.93415 2.53374L11.8146 5.53867C12.0694 5.80446 12.0605 6.22648 11.7947 6.48127Z"
      fill="#B3B3B5"
    />
  </svg>
)

type RetroTable = {
  id: number
  project: {
    name: string
    src: string
    cryptosImg: Array<{ id: number; src: string }>
  }
  category: string
  allocated: string
  inBallots: string
  inLists: string
  tags: Array<{ id: number; color: { bg: string; txt: string }; title: string; value: number }>
}

const Table = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const data = useMemo<RetroTable[]>(
    () => [
      {
        id: 0,
        allocated: '660k OP',
        category: 'Utilities',
        inBallots: '109',
        inLists: '14',
        project: {
          name: 'Protocol Guild',
          cryptosImg: [
            { id: 0, src: '' },
            { id: 1, src: '' },
            { id: 2, src: '' },
            { id: 3, src: '' },
          ],
          src: '',
        },
        tags: [
          { id: 0, color: { bg: 'rgba(153, 230, 196, 1)', txt: 'rgba(4, 118, 68, 1)' }, title: 'DEV ECO', value: 1 },
          { id: 1, color: { bg: 'rgba(255, 175, 175, 1)', txt: 'rgba(156, 36, 36, 1)' }, title: 'OP STACK', value: 3 },
        ],
      },
      {
        id: 1,
        allocated: '660k OP',
        category: 'Utilities +1',
        inBallots: '110',
        inLists: '14',
        project: {
          name: 'Protocol Guild',
          cryptosImg: [
            { id: 0, src: '' },
            { id: 1, src: '' },
            { id: 2, src: '' },
          ],
          src: '',
        },
        tags: [
          { id: 0, color: { bg: 'rgba(153, 230, 196, 1)', txt: 'rgba(4, 118, 68, 1)' }, title: 'DEV ECO', value: 1 },
        ],
      },
      {
        id: 2,
        allocated: '660k OP',
        category: 'Utilities',
        inBallots: '108',
        inLists: '14',
        project: {
          name: 'Protocol Guild',
          cryptosImg: [
            { id: 0, src: '' },
            { id: 1, src: '' },
            { id: 2, src: '' },
            { id: 3, src: '' },
          ],
          src: '',
        },
        tags: [
          { id: 0, color: { bg: 'rgba(255, 234, 150, 1)', txt: 'rgba(156, 124, 0, 1)' }, title: 'END UX', value: 2 },
          { id: 1, color: { bg: 'rgba(255, 175, 175, 1)', txt: 'rgba(156, 36, 36, 1)' }, title: 'OP STACK', value: 3 },
        ],
      },
      {
        id: 3,
        allocated: '660k OP',
        category: 'Utilities',
        inBallots: '111',
        inLists: '14',
        project: {
          name: 'Protocol Guild',
          cryptosImg: [
            { id: 0, src: '' },
            { id: 1, src: '' },
          ],
          src: '',
        },
        tags: [
          { id: 0, color: { bg: 'rgba(153, 230, 196, 1)', txt: 'rgba(4, 118, 68, 1)' }, title: 'DEV ECO', value: 1 },
          { id: 1, color: { bg: 'rgba(255, 175, 175, 1)', txt: 'rgba(156, 36, 36, 1)' }, title: 'OP STACK', value: 3 },
        ],
      },
      {
        id: 3,
        allocated: '660k OP',
        category: 'Utilities',
        inBallots: '105',
        inLists: '14',
        project: {
          name: 'Protocol Guild',
          cryptosImg: [
            { id: 0, src: '' },
            { id: 1, src: '' },
          ],
          src: '',
        },
        tags: [
          { id: 0, color: { bg: 'rgba(150, 191, 252, 1)', txt: 'rgba(0, 60, 151, 1)' }, title: 'COLL GOV', value: 0 },
          { id: 1, color: { bg: 'rgba(153, 230, 196, 1)', txt: 'rgba(4, 118, 68, 1)' }, title: 'DEV ECO', value: 1 },
          { id: 2, color: { bg: 'rgba(255, 234, 150, 1)', txt: 'rgba(156, 124, 0, 1)' }, title: 'END UX', value: 2 },
          { id: 3, color: { bg: 'rgba(255, 175, 175, 1)', txt: 'rgba(156, 36, 36, 1)' }, title: 'OP STACK', value: 3 },
        ],
      },
      {
        id: 3,
        allocated: '660k OP',
        category: 'Utilities',
        inBallots: '120',
        inLists: '14',
        project: {
          name: 'Protocol Guild',
          cryptosImg: [
            { id: 0, src: '' },
            { id: 1, src: '' },
          ],
          src: '',
        },
        tags: [
          { id: 0, color: { bg: 'rgba(153, 230, 196, 1)', txt: 'rgba(4, 118, 68, 1)' }, title: 'DEV ECO', value: 1 },
          { id: 1, color: { bg: 'rgba(255, 234, 150, 1)', txt: 'rgba(156, 124, 0, 1)' }, title: 'END UX', value: 2 },
        ],
      },
      {
        id: 3,
        allocated: '660k OP',
        category: 'Utilities',
        inBallots: '111',
        inLists: '14',
        project: {
          name: 'Protocol Guild',
          cryptosImg: [
            { id: 0, src: '' },
            { id: 1, src: '' },
          ],
          src: '',
        },
        tags: [
          { id: 1, color: { bg: 'rgba(255, 175, 175, 1)', txt: 'rgba(156, 36, 36, 1)' }, title: 'OP STACK', value: 3 },
        ],
      },
    ],
    []
  )
  const columnHelper = createColumnHelper<RetroTable>()

  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue() + 1,
      header: () => '#',
    }),
    columnHelper.accessor('project', {
      cell: (info) => (
        <HStack columnGap="8px" margin="0px !important">
          <Box width="36px" height="36px" bg="primary.50" rounded="full" />
          {/* <Img src={info.getValue().src} /> */}
          <VStack rowGap="6px" margin="0px !important">
            <Text>{info.getValue().name}</Text>
            <HStack width="full" justifyContent="flex-start" columnGap="4px" margin="0px !important">
              {info.getValue().cryptosImg.map((img) => (
                //   <Img key={img.id} src={img.src} />
                <Box width="16px" height="16px" bg="primary.50" key={img.id} />
              ))}
            </HStack>
          </VStack>
        </HStack>
      ),
      header: () => <span>Project</span>,
    }),
    columnHelper.accessor('category', {
      header: () => 'Category',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('allocated', {
      header: () => 'Allocated',
      cell: (info) => <Text>{info.getValue()} </Text>,
    }),
    columnHelper.accessor('inBallots', {
      header: 'In Ballots',
      cell: (info) => (
        <HStack
          sx={{
            svg: {
              width: '16px',
              height: '16px',
            },
          }}
          margin="0px !important"
        >
          <Text>{info.getValue()}</Text>
          <Icon as={CheckMarkIcon} />
        </HStack>
      ),
    }),
    columnHelper.accessor('inLists', {
      header: 'In List',
      cell: (info) => (
        <HStack margin="0px !important">
          <Text>{info.getValue()}</Text>
          <Icon as={ListIcon} />
        </HStack>
      ),
    }),
    columnHelper.accessor('tags', {
      sortingFn: (rowA, rowB, columnId) => {
        const columnAData: RetroTable['tags'] = rowA.getValue(columnId)
        const columnBData: RetroTable['tags'] = rowB.getValue(columnId)

        const rowAMinValue: RetroTable['tags'][0]['value'] = columnAData.reduce((min, obj) => {
          return obj.value < min ? obj.value : min
        }, columnAData[0].value)

        const rowBMinValue: RetroTable['tags'][0]['value'] = columnBData.reduce((min, obj) => {
          return obj.value < min ? obj.value : min
        }, columnBData[0].value)
        console.log({ rowAMinValue, rowBMinValue })

        return rowAMinValue < rowBMinValue ? 1 : -1
      },
      header: 'RetroPGF Tags',
      cell: (info) => (
        <HStack columnGap="4px" margin="0px !important">
          {info.getValue().map((item) => (
            <Text
              whiteSpace="nowrap"
              borderRadius="12px"
              height="24px"
              lineHeight="24px"
              px="8px"
              fontSize="xs"
              fontWeight="bold"
              key={item.id}
              color={item.color.txt}
              bg={item.color.bg}
            >
              {item.title}
            </Text>
          ))}
        </HStack>
      ),
    }),
  ]
  console.log({ sorting })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <Box overflow="auto" width="full" pt="24px">
      <ChakraTable>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th
                  title={
                    header.column.getCanSort()
                      ? header.column.getNextSortingOrder() === 'asc'
                        ? 'Sort ascending'
                        : header.column.getNextSortingOrder() === 'desc'
                        ? 'Sort descending'
                        : 'Clear sort'
                      : undefined
                  }
                  onClick={header.column.getToggleSortingHandler()}
                  whiteSpace="nowrap"
                  p="12px 8px"
                  fontSize="16px"
                  fontWeight="bold"
                  color="gray.60"
                  key={header.id}
                >
                  {console.log(header.column.getIsSorted())}
                  <HStack>
                    <Text>{flexRender(header.column.columnDef.header, header.getContext())}</Text>
                    {{
                      asc: <Icon transform="rotate(45deg)" as={ArrowDown} />,
                      desc: <Icon as={ArrowDown} />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </HStack>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td p="12px 8px" color="gray.0" fontSize="16px" fontWeight="bold" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>

      <Button
        borderRadius="8px"
        marginTop="32px"
        color="gray.0"
        bg="primary.300"
        fontSize="md"
        fontWeight="700"
        _hover={{
          bg: 'primary.400',
        }}
        _active={{
          bg: 'primary.500',
        }}
      >
        Explore more
      </Button>
    </Box>
  )
}

export default Table