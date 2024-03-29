---
title: Hebbian Learning
content-type: static
layout: Post
permalink: /hebbian-learning
excerpt: First post in a series about biologically inspired learning
---

---

[![](/assets/img/pyramidal.jpg)](/assets/img/pyramidal.jpg)


{:.image-caption}
Illustration of a pyramidal neuron in the cerebral cortex by Ramon y Cajal. <br/>*Courtesy of the Cajal Institute*


# Neuroscientific Considerations
#### The Problem Of Scales

Understanding how learning occurs in the brain is a key problem in neuroscience. Learning, along with other high level mechanisms (i.e. vision, planning), are difficult to address due to the different scales which they can be analyzed from (i.e. individual neurons -> neural populations -> observable behavior). In some cases, this leads to varying hypotheses about the same underlying process.

Given the emergent nature of brain structures, there is an inherent coupling between scales. For example, when modeling neural circuit dynamics, the resulting model can be influenced by assumptions of lower-level structure. One assumption in this case is the choice of single neuron model (i.e. Hodgkin-Huxley, Leaky Integrate-and-Fire, etc.) and such a choice could impose new constraints and/or unexpected behaviors. **Essentially, this idea comes down to recognizing when models are interconnected and understanding how assumptions can propagate across scales.**

[![](/assets/img/levels.png)](/assets/img/pyramidal.levels.png)

{:.image-caption}
Levels of analysis in the brain <br/>*Courtesy of Terrence Sejnowski*


#### Two Accounts of Neuro-AI Modeling

With the consideration of scales addressed, I classify two main approaches towards building computational models that share function(s) with their biological counterparts. This formalization is not exhaustive, but can be used to classify a good portion of neuro/ai papers.

The first is to **analyze the structure and dynamics of a neural mechanism** and then **build a computational model consistent with that structure**. 

The second is to **build a system which can perform an innately human task well** and then **identify parallels with the brain at computational and representational levels** [1]. The first approach can be seen as a bottom up/emergent view, whereas the second approach a top-down/distillation view.

<strong><span class="orange">Bottom-Up/Emergent View (Structure → Behavior)</span></strong>
>1. Attempt to model specific aspects of brain structure (connectivity patterns, cell types, etc.)
>2. Train model on a given task and observe model's behavior w.r.t human behavior

<strong><span class="orange">Top-Down/Distillation View (Behavior → Structure)</span></strong>
>1. Identify a complex task humans are commonly able to solve
>2. Build a model using existing deep learning approaches to try and solve said task
>3. Observe model's behavior with respect to human behavior, and draw parallels between model and brain structure after the fact using interpretability techiques (adversarial examples, activation maps, etc.)

An instructive example of the bottom up view comes from the topic of studying backpropagation in the brain. In particular, it is common to see analysis of synaptic information processing in the brain observed and then applied to existing computational models. Lillicrap et al. [2], demonstrates this with an biologically plausible form of backpropagation called feedback alignment, which follows from evidence that there is no precise backward connectivity in the brain. With consideration of biological constraints, the authors proposed a model which allows propagation of error signals to hidden layer neurons without an explicit backward pass (no requirement of backward connectivity patterns). This work, along with many others in the space [3] [4] [5], employ a similar approach of taking inspiration from neuroscience studies and adapting specific properties from them to existing deep learning architectures. The topic of biologically plausible techniques for error propagation will be looked at in a future post.  

An example of the top-down approach can best be seen with research of feature extractors in convolutional neural networks (CNNs). Hubel and Wiesel [6] noted that cells in the primary visual cortex (V1) tend to respond to locally oriented edges within small receptive fields. Following this, the neurons in subsequent layers have signficant responses to more complex features (i.e. V4 responding to shape outlines) [7]. Similarly, within CNNs we see this increase in feature complexity as a function of depth through a network This information helps when looking parallels between convolutional layers and visual cortex layers as a function of their depth in a network or pathway. An overview [8] elaborates on this particular relationship.

With these thoughts aside, we'll first look at a computational account of learning and synaptic plasticity in the brain known as Hebbian Learning (HL). Then, we'll draw connections to some classical and modern machine learning architectures inspired by HL including Hopfield Nets, Competing Hidden Units, and Differentiable Plasticity. 

![](/assets/img/hebb.png)

# What is Hebbian Learning?
At it's core, hebbian learning states that if two artificial neurons <strong><span class="green underlit">i</span></strong> (pre-synaptic) and <strong><span class="green underlit">j</span></strong> (post-synaptic) connected by a synapse, <strong><span class="green underlit">s</span></strong>, the synaptic strength (weight) can be seen as a product of the pre- and post- synaptic activity. In the biological case, this joint, local activity occurs within the range of a small time window (300ms). 

From a causal perspective, timing is an important factor as neuron <strong><span class="green underlit">i</span></strong> has to fire just before neuron <strong><span class="green underlit">j</span></strong> to make a potential claim that i has a role in j's firing, a case which under Hebb's model would lead to a synaptic strengthening. 

On the other hand, if the activity of <strong><span class="green underlit">j</span></strong> tends to be uncorrelated to that of <strong><span class="green underlit">i</span></strong> (i.e. j firing before i) then we'd tend to see a weakening of the synapse. The timing of neural activity contributing to both strengthing **and weakening** is captured by an larger concept, which Hebbian learning falls under, known as Spike Time Dependent Plasticity (STDP), and is a widely accepted explanation for long-term potentiation(strengthening) and depression(weakening) of connectivity in neuron populations.

# Formalization of a Hebbian Learning Rule
For this formalization, we will use the McCullough-Pitts artificial neuron model/binary threshold neuron. Simply put, it computes a weighted sum of input activations and passes it through a threshold function (i.e. step function, sigmoid, etc.). 

$$ 
y_k = \phi(\sum_{i=0}^{n} w_{ik}x_i)


$$



$$ 
\Delta w_{ij} = \alpha \cdot x_i \cdot x_j
$$

In its most basic form, the hebbian learning rule states that a synaptic weight between neurons i and j (w_ij), are derived from the paired activity of i and j. From this formalization we can note two main cases where w_ij will change significantly.

Case 1: The signs of neurons i and j are the same (++, --) 
Case 2: The signs of neurons i and j differ (-+, +-)




The Hebbian learning account provides an intuitive, experimentally backed framework for describing how synaptic weights change through time-correlated activity between neurons. 

Synapse strengthened (weight adjustment) when post-synaptic response occurs in conjunction with pre-synaptic firing. Pre-synaptic neuron has to fire "just before" post-synaptic neuron so causality can be inferred.

Hebbian learning is an account of weight adjustment between neurons

Hebb supports a real-time learning mechanism, where the temporal association of signals is important to the efficacy of a synapse and corresponding learning mechanisms which adjust it

Non real-time learning error signals computed from system responses/order of inputs and outputs, but not the exact time of occurence of each input/output 

Hebbian LTP is seen in conjunction with Hetero-synaptic long term depression, where the receiving neuron is activated with no activation of the sending neuron. Thus, the pre-synaptic function is a difference of its activation and current synaptic weight

same signs → strengthen synapse

opposite signs → weaken synapse

### Hopfield Networks
A Hopfield Network is a form of recurrent neural network in which all nodes are connected to every other node 

### Krotov et al. Local Neuronal Error

### Differentiable Plasticity

### References 
1. D. Marr, https://dspace.mit.edu/handle/1721.1/5782 (1976)
2. T. Lillicrap  et al., *Random synaptic feedback weights support error backpropagation for deep learning* (2016)
3. B. Lansdell et al. ,*Learning to solve the credit assignment problem* (2019)
4. I. Jones, K. Kording *Can Single Neurons Solve MNIST? The Computational Power of Biological Dendritic Trees* (2020)
5. J. Hawkins et al., *A Framework for Intelligence and Cortical Function Based on Grid Cells in the Neocortex* (2019)
6. D.H. Hubel, T. N. Wiesel, *Receptive fields, binocular interaction and functional architecture in the cat’s visual cortex.* (1962)
7. A. Pasupathy, C. Connor,*Population coding of shape in area V4.* (2002)
8. G. Lindsay *Convolutional Neural Networks as a Model of the Visual
System: Past, Present, and Future* (2020)

