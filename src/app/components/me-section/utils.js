export const downloadMyResume = () => {
  if (window !== 'undefined') {
    window.open(
      'https://drive.google.com/file/d/1uCfLDrbhK5WnYVw10vVgBPSVEaekS8mi/view?usp=sharing',
    )
  }
}

export default { downloadMyResume }
