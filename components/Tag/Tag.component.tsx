type TagProps = {
  value: string
}

function Tag(props: TagProps) {
  return <div className="relative rounded-full py-1 px-3 bg-purple-400 dark:bg-purple-700">
    <p className="text-gray-800 dark:text-gray-200 capitalize">
      { props.value }
    </p>
  </div>;
}

export default Tag;