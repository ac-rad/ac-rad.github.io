const projInfo = [
  {
    image: ["clairify.jpg", "Robot Arm preparing food"],
    title:
      "Errors are Useful Prompts: Instruction Guided Task Programming with Verifier-Assisted Iterative Prompting",
    description:
      "Generating low-level robot task plans from high-level natural language instructions remains a challenging problem. Although large language models have shown promising results in generating plans, the accuracy of the output remains unverified. Furthermore, the lack of domain-specific language data poses a limitation on the applicability of these models. In this paper, we propose CLAIRIFY, a novel approach that combines automatic iterative prompting with program verification to ensure programs written in data-scarce domain-specific language are syntactically valid and incorporate environment constraints. Our approach provides effective guidance to the language model on generating structured-like task plans by incorporating any errors as feedback, while the verifier ensures the syntactic accuracy of the generated plans. We demonstrate the effectiveness of CLAIRIFY in planning chemistry experiments by achieving state-of-the-art results. We also show that the generated plans can be executed on a real robot by integrating them with a task and motion planner.",
    tags: ["Natural Language Processing", "Program Synthesis", "Robotics"],
    date: "24-03-2023",
    acceptedTo: ["Under Review"],
    paperPage: "https://ac-rad.github.io/clairify",
    arxiv: "https://arxiv.org/abs/2303.14100",
    github: "https://github.com/ac-rad/xdl-generation",
  },
  {
    image: ["digital-pipette.jpg", "Robot pouring water with pipette"],
    title:
      "Digital pipette: Open hardware for liquid transfer in self-driving laboratories",
    description:
      "Self-driving laboratories promise to democratize automated chemical laboratories. Accurate liquid handling is an essential operation in the context of chemical labs, and consequently a self-driving laboratory will require a robotic liquid handling and transfer. Although many pipettes are available for human scientists, robots cannot manipulate these pipettes due to the limitations of current robot gripper morphology. We propose an intuitive yet elegant design for a 3D-printed digital pipette designed for robots to carry out chemical experiments. Performance-evaluation experiments were carried out liquid transfer tasks. Our results show that robots with digital pipette could transfer liquids within 0.5% error. This error is comparable to the baseline set by commercially available human-handled pipettes.",
    tags: ["Tools", "Robotics", "Hardware", "3D Printing"],
    date: "05-03-2023",
    acceptedTo: ["Under Review"],
    paperPage: "",
    arxiv: "https://doi.org/10.26434/chemrxiv-2023-nvxkg",
    github: "https://github.com/ac-rad/digital-pipette",
  },
  {
    image: ["robot-chemist-tamp.jpg", "Robot pouring water from beaker"],
    title: "Chemistry Lab Automation via Constrained Task and Motion Planning",
    description:
      "Chemists need to perform many laborious and time-consuming experiments in the lab to discover and understand the properties of new materials. To support and accelerate this process, we propose a robot framework for manipulation that autonomously performs chemistry experiments. Our framework receives high-level abstract descriptions of chemistry experiments, perceives the lab workspace, and autonomously plans multi-step actions and motions. The robot interacts with a wide range of lab equipment and executes the generated plans. A key component of our method is constrained task and motion planning using PDDLStream solvers. Preventing collisions and spillage is done by introducing a constrained motion planner. Our planning framework can conduct different experiments employing implemented actions and lab tools. We demonstrate the utility of our framework on pouring skills for various materials and two fundamental chemical experiments for materials synthesis: solubility and recrystallization.",
    tags: ["Task and motion planning", "Robotics", "Chemistry", "Automation"],
    date: "19-12-2022",
    acceptedTo: ["Under Review"],
    paperPage: "https://ac-rad.github.io/robot-chemist-tamp/",
    arxiv: "https://arxiv.org/abs/2212.09672v2",
    github: "",
  },
  {
    image: ["labpic.jpg"],
    title:
      "Computer Vision for Recognition of Materials and Vessels in Chemistry Lab Settings and the Vector-LabPics Data Set",
    description:
      "This work presents a machine learning approach for the computer vision-based recognition of materials inside vessels in the chemistry lab and other settings. In addition, we release a data set associated with the training of the model for further model development. The task to learn is finding the region, boundaries, and category for each material phase and vessel in an image. Handling materials inside mostly transparent containers is the main activity performed by human and robotic chemists in the laboratory. Visual recognition of vessels and their contents is essential for performing this task. Modern machine-vision methods learn recognition tasks by using data sets containing a large number of annotated images. This work presents the Vector-LabPics data set, which consists of 2187 images of materials within mostly transparent vessels in a chemistry lab and other general settings. The images are annotated for both the vessels and the individual material phases inside them, and each instance is assigned one or more classes (liquid, solid, foam, suspension, powder, ...). The fill level, labels, corks, and parts of the vessel are also annotated. Several convolutional nets for semantic and instance segmentation were trained on this data set. The trained neural networks achieved good accuracy in detecting and segmenting vessels and material phases, and in classifying liquids and solids, but relatively low accuracy in segmenting multiphase systems such as phase-separating liquids.",
    tags: ["Computer Vision", "Chemistry", "Machine Learning", "Data Set"],
    date: "10-09-2020",
    acceptedTo: ["ACS Central Science"],
    paperPage: "https://www.cs.toronto.edu/chemselfies/",
    arxiv: "https://pubs.acs.org/doi/10.1021/acscentsci.0c00460",
    github:
      "https://github.com/aspuru-guzik-group/Computer-vision-for-the-chemistry-lab",
  },
  {
    image: ["seeingglass.svg"],
    title:
      "Seeing Glass: Joint Point Cloud and Depth Completion for Transparent Objects",
    description:
      "The basis of many object manipulation algorithms is RGB-D input. Yet, commodity RGB-D sensors can only provide distorted depth maps for a wide range of transparent objects due light refraction and absorption. To tackle the perception challenges posed by transparent objects, we propose TranspareNet, a joint point cloud and depth completion method, with the ability to complete the depth of transparent objects in cluttered and complex scenes, even with partially filled fluid contents within the vessels. To address the shortcomings of existing transparent object data collection schemes in literature, we also propose an automated dataset creation workflow that consists of robot-controlled image collection and vision-based automatic annotation. Through this automated workflow, we created Toronto Transparent Objects Depth Dataset (TODD), which consists of nearly 15000 RGB-D images. Our experimental evaluation demonstrates that TranspareNet outperforms existing state-of-the-art depth completion methods on multiple datasets, including ClearGrasp, and that it also handles cluttered scenes when trained on TODD. ",
    tags: ["Computer Vision", "Robotics", "Machine Learning", "Data Set"],
    date: "30-09-2021",
    acceptedTo: ["CoRL 2021"],
    paperPage: "https://www.pair.toronto.edu/TranspareNet/",
    arxiv: "https://arxiv.org/abs/2110.00087",
    github: "https://github.com/pairlab/TranspareNet",
  },
  {
    image: ["transproteus.gif"],
    title: "TransProteus Dataset",
    description:
      "We present TransProteus, a dataset, and methods for predicting the 3D structure, annotations and properties of materials inside transparent vessels from a single image. Manipulating materials in containers is essential in most areas of experimental chemistry and depends heavily on vision. Training computer vision to recognize specific properties and shapes demands large annotated datasets. Manually annotated datasets are limited in size and cannot accurately account for 3D structures and continuous material properties (such as transparency). This work supplies a new procedurally generated dataset consisting of 50k images of liquids and solid materials inside transparent containers. The image annotations include 3D models, material properties (color/transparency/roughness…), and segmentation masks for the vessel and its content. The synthetic (CGI) part of the dataset was procedurally generated using 13k different objects, 500 different environments (HDRI), and 1450 material textures (PBR) combined with simulated liquids and procedurally generated vessels. In addition, we supply 104 real-world images of objects inside transparent vessels with depth maps of both the vessel and its content. We demonstrate a net that uses a single image to predict the visual material properties. We propose a method that predicts 3D models from an image as an XYZ map. This allows the trained net to predict the 3D model as a map with XYZ coordinates per pixel without prior knowledge of the image source. We use this to predict 3D models of the materials in the vessel and the vessel, using a single image.",
    tags: ["Computer Vision", "Robotics", "Machine Learning", "Data Set"],
    date: "23-12-2021",
    acceptedTo: ["Digital Discovery"],
    paperPage: "https://www.cs.toronto.edu/matterlab/TransProteus/",
    arxiv: "https://pubs.rsc.org/en/content/articlehtml/2022/dd/d1dd00014d",
    github:
      "https://github.com/sagieppel/Predicting-3D-shape-of-liquid-and-objects-inside-transparent-vessels-as-XYZ-map-from-a-single-image",
  },
  {
    image: ["mvtrans.jpg"],
    title: "MVTrans: Multi-View Transparent Object Perception",
    description:
      "Transparent object perception is a crucial skill for applications such as robot manipulation in household and laboratory settings. Existing methods utilize RGB-D or stereo inputs to handle a subset of perception tasks including depth and pose estimation. However transparent object perception remains to be an open problem. In this paper, we forgo the unreliable depth map from RGB-D sensors and extend the stereo based method. Our proposed method, MVTrans, is an end-to-end multi-view architecture with multiple perception capabilities, including depth estimation, segmentation, and pose estimation. Additionally, we establish a novel procedural photo-realistic dataset generation pipeline and create a large-scale transparent object detection dataset, Syn-TODD, which is suitable for training networks with all three modalities, RGB-D, stereo and multi-view RGB.",
    tags: ["Computer Vision", "Robotics", "Machine Learning", "Data Set"],
    date: "22-02-2023",
    acceptedTo: ["ICRA 2023"],
    paperPage: "https://ac-rad.github.io/MVTrans/",
    arxiv: "https://arxiv.org/abs/2302.11683",
    github: "https://github.com/ac-rad/transparent-perception",
  },
];

export { projInfo };
