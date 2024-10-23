export function parseSearchParams(searchParams: URLSearchParams) {
  const options = {}

  if (searchParams.has('outfit')) {
    options['replace'] = {
      from: 'outfit',
      to: searchParams.get('outfit'),
    }
  }

  if (searchParams.has('background')) {
    options['replaceBackground'] = searchParams.get('background')
  }

  if (searchParams.has('sharpen')) {
    options['sharpen'] = searchParams.get('sharpen') === 'true'
  }

  if (searchParams.has('remove')) {
    options['remove'] = {
      prompt: searchParams.getAll('remove'),
      multiple: true
  }
  }

  if (searchParams.has('fillBackground')) {
    options['fillBackground'] = searchParams.get('fillBackground') === 'true'
  }

  if (searchParams.has('aspectRatio')) {
    options['aspectRatio'] = searchParams.get('aspectRatio')
  }

  return options
}