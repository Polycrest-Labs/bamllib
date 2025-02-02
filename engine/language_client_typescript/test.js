const native = require('./native.js');
const { BamlRuntime } = native;


console.log(BamlRuntime);

console.log(BamlRuntime.getPromptString());
BamlRuntime.getPromptString();
const fileMap = {
  
    "../c:\\projects\\foo-code\\baml_src\\clients.baml": "client<llm> GPT4 {\r\n  provider openai\r\n  options {\r\n    model \"gpt-4\"\r\n    api_key env.OPENAI_API_KEY\r\n  }\r\n}\r\n\r\nclient<llm> Claude {\r\n  provider anthropic\r\n  options {\r\n    model \"claude-3-opus-20240229\"\r\n    api_key env.ANTHROPIC_API_KEY\r\n  }\r\n}\r\n\r\n\r\nclient<llm> FastAnthropic {\r\n  provider anthropic\r\n  options {\r\n    model \"claude-3-haiku-20240307\"\r\n    api_key env.ANTHROPIC_API_KEY\r\n  }\r\n}\r\n\r\nclient<llm> FastOpenAI {\r\n  provider openai\r\n  options {\r\n    model \"gpt-3.5-turbo\"\r\n    api_key env.OPENAI_API_KEY\r\n  }\r\n}\r\n\r\n\r\nclient<llm> Fast {\r\n  provider round-robin\r\n  options {\r\n    // This will alternate between the two clients\r\n    strategy [FastAnthropic, FastOpenAI]\r\n  }\r\n}\r\nclient<llm> Kluster {\r\n  provider openai-generic\r\n  options {\r\n    model \"deepseek-ai/DeepSeek-R1\"\r\n    api_key \"783007c0-72cd-4caf-8e1b-618212f902ea\"\r\n    base_url \"https://api.kluster.ai/v1\"\r\n  }\r\n}\r\nclient<llm> Openai {\r\n  provider fallback\r\n  options {\r\n    // This will try the clients in order until one succeeds\r\n    strategy [GPT4, FastOpenAI]\r\n  }\r\n}",
    "../c:\\projects\\foo-code\\baml_src\\generators.baml": "\r\n// This helps use auto generate libraries you can use in the language of\r\n// your choice. You can have multiple generators if you use multiple languages.\r\n// Just ensure that the output_dir is different for each generator.\r\ngenerator target {\r\n    // Valid values: \"typescript\", \"python-pydantic\", \"ruby\"\r\n    version \"0.74.0\"\r\n    output_type \"typescript\"\r\n    // Where the generated code will be saved (relative to baml_src/)\r\n    output_dir \"../\"\r\n}\r\n        ",
    "../c:\\projects\\foo-code\\baml_src\\resume.baml": "// Defining a data model.\r\nclass Resume {\r\n  name string\r\n  email string\r\n  experience string[]\r\n  skills string[]\r\n}\r\n\r\n// Creating a function to extract the resume from a string.\r\nfunction ExtractResume(resume: string) -> Resume {\r\n  client Kluster\r\n  prompt #\"\r\n    Extract from this balls content:\r\n    {{ resume }}\r\n\r\n    {{ ctx.output_format }}\r\n  \"#\r\n}\r\n\r\n// Testing the function with a sample resume.\r\ntest vaibhav_resume {\r\n  functions [ExtractResume]\r\n  args {\r\n    resume #\"\r\n      Vaibhav Gupta\r\n      vbv@boundaryml.com\r\n      create 1/1/2022\r\n      Experience:\r\n      - Founder at BoundaryML\r\n      - CV Engineer at Google\r\n      - CV Engineer at Microsoft\r\n\r\n      Skills:\r\n      - Rust\r\n      - C++\r\n    \"#\r\n  }\r\n}\r\n",
  }

const b = BamlRuntime.fromFiles('baml_src', fileMap ,process.env);
//const cm = new BamlCtxManager()
a = {h:"test"};

const c = b.renderPrompt2('ExtractResume', {
    "resume": "yes!!!!!!"
  })
console.log(c);