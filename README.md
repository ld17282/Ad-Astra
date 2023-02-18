# Ad Astra

<!-- style -->
<!-- <style>
    b { font-size: 15px;
    font-weight: 700}
</style> -->

<!-- Ad Astra Readme -->
<h1 align="center">
<br/>
<img height= "200" src="./src/client/assets/readme logo.png">

Ad Astra keeps track of all upcoming SpaceX rocket launches. Launch dates change constantly, so Ad Astra acts as your launch concierge to make sure you never miss out on witnessing history.

<center>

<center><h2>Never Miss Out On Witnessing History</h2><center>

![GitHub top language](https://img.shields.io/github/languages/top/ld17282/Ad-Astra) &nbsp;
![GitHub package.json version](https://img.shields.io/github/package-json/v/ld17282/Ad-Astra) &nbsp;
![GitHub](https://img.shields.io/github/license/ld17282/Ad-Astra) &nbsp;
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ld17282/Ad-Astra/main) &nbsp;
![GitHub contributors](https://img.shields.io/github/contributors/ld17282/Ad-Astra) &nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/ld17282/Ad-Astra?style=social) &nbsp;
<center>

</h1>


<hr>
<h3> <b>About Ad Astra</b> </h3><br/>

Ad Astra keeps track of all upcoming SpaceX rocket launches. Launch dates change constantly, so Ad Astra acts as your launch concierge to make sure you never miss out on witnessing history.
</details>

---

<!--Table of Contents Here-->
<details open>
    <summary><b>Table of Contents</b></summary>
    <ol>
        <li>
            <a href = "#techStack"> Tech-Stack </a>
        </li>
        <li>
            <a href = "#license"> License </a>
        </li> 
        <li>
            <a href = "#contacts"> Contacts </a>
        </li> 
    </ol>
</details>

<hr>

<details open> 
    <summary><b> Tech-Stack </b></summary> <a name="techStack"></a>
    <div align="center">
        <div align="center">
            <div align="center">
                <div align="center">
                    <code>
                        <img height= "40" src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                    </code> <br>
                </div>
                <code>
                    <img height = "40" src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                    <img height = "40" src="https://img.icons8.com/color/48/000000/css3.png"/>
                </code> <br>
            </div>
            <code>
                <img height = "40" src="https://img.icons8.com/color/48/000000/tensorflow.png"/>
                <img height = "40" src="https://img.icons8.com/bubbles/50/000000/react.png"/>
                <img height = "40" src="https://img.icons8.com/fluency/48/000000/node-js.png"/>
            </code><br>
        </div>
    <code>
        <img height = "40" src="https://cdn.icon-icons.com/icons2/2389/PNG/48/socket_io_logo_icon_144874.png"/>
        <img height = "40" src="https://reactflow.dev/img/logo.svg"/>
        <img height = "40" src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/50/000000/external-d3js-a-javascript-library-for-producing-dynamic-interactive-data-visualizations-in-web-browsers-logo-duo-tal-revivo.png"/>
        <img height = "40" src="https://img.icons8.com/color/48/000000/figma--v1.png"/>
        <img height = "40" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-shadow-tal-revivo.png"/>
    </code> <br>
    </div>

</details>

<details open> 
    <summary><b> Install and Set-up </b></summary> <a name="installAndSetup"></a>

<br/>

1. Install our npm package in your terminal.

```sh
npm install flowspace.js
```

2. Import HandShake class from the FlowSpace node_modules.

```sh
import { HandShake } from "flowspace";
```

3. Declare your variable for the TensorFlow createModel function.

```sh
const model = createModel();
```

4. Instantiate a new instance of the HandShake class, passing in your model object.

```sh
const visualizer = new HandShake(model);
```

5. Ensure when training the model, pass the lossCallback method from the HandShake instance into the fit method.

```sh
    ## Example below ##

    model.fit(trainingFeatureTensor, trainingLabelTensor, {
		epochs: 20,
		callbacks: {
			onEpochEnd: visualizer.lossCallback
		},
	});
```

6. When ready, simply run the FlowSpace functionality in your terminal.

```sh
npx flowspace
```

</details>

<details open> 
    <summary><b> Using FlowSpace Features </b></summary> <a name="usingFlowSpace"></a><br/>

<div align=center>
    <img style="width:35.4347%; height:auto" src="https://github.com/oslabs-beta/FlowSpace/raw/npmPackage/client/assets/model_architecture.gif"/>
    <img style="width:35.4347%; height:auto" src="https://github.com/oslabs-beta/FlowSpace/raw/npmPackage/client/assets/loss_graphing_panel.gif"/>
<div>
</details>

<!-- ## Credits (Contributors) <a name = "credits"></a>
Give credits to the team here, we can make list if needed -->

<details open> 
    <summary><b> License </b></summary> <a name="license"></a>

MIT License

Copyright (c) 2022 OSLabs Beta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</details>

<details open> 
    <summary><b> The Team </b></summary> <a name="contacts"></a>

- [Mark Alexander](https://github.com/MarkA772)
- [Saif Beiruty](https://github.com/saifbeiruty)
- [Laurence Diarra](https://github.com/ld17282)
- [Mike Oakes](https://github.com/MOakes7)
- [Sabre Nguyen](https://github.com/klsabren)

</details>