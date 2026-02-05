"use client";
import Reveal from "@/components/ui/Reveal";
import Counter from '@/components/ui/counter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Handshake, Star, Timer, ArrowRight, StarHalf, Laugh } from 'lucide-react';
import LandingPageCarousel from "@/components/ui/landingpagephotoshopcarousel";

const PhotoshopClient = () => {

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (window.fbq) {
      fbq("track", "ViewContent");
    }
  }, []);

  function handleBuyNow() {

     window.location.href = "https://whop.com/checkout/plan_hnRF84w4xCaWu";

    setDisabled(true);
  };

  return (
    <div className="bg-gray-50 w-full">
      {/* HERO */}
      <div className="md:flex md:justify-between overflow-hidden w-full md:bg-black relative">
        <h1 className="text-2xl md:text-3xl md:hidden font-semibold text-white text-center pt-8 absolute">
          Photoshop Mastery:
          <span className="block text-gray-100 font-normal">
            The Complete A – Z Guide from Core Basics to Advanced
          </span>
        </h1>
        <Image
          src="/gallery/photoshop-feature.jpg"
          width={600}
          height={400}
          alt='Featured-image'
          className="h-160 -top-5 md:w-110 md:h-180 object-cover md:pt-20"
          priority />
        <Reveal>
          <div className=" wrap-normal w-280 py-5 ">
            <h1 className="text-2xl md:text-3xl hidden md:flex font-semibold text-white text-center my-4">Photoshop Mastery:
              <span className="text-gray-100  mx-3">
                The Complete A – Z Guide from Core Basics to Advanced
              </span>
            </h1>
          </div>
          <div className="md:max-w-6x1 mx-auto px-3.5">
            <div className='md:text-white grid md:grid-cols-[1fr,1fr]'>
              <p className='pb-2'>Learn Photoshop the Right Way - <span>Without Confusion, Fear, or Random Guessing If Photoshop feels overwhelming, messy, or too technical…this ebook was written for you.</span></p>
              <ul className='pb-2'>
                <li><strong>👉 Beginner-friendly.</strong></li>
                <li><strong>👉 Practice-based.</strong></li>
                <li><strong>👉 Real professional workflow Are You Facing These Problems?</strong></li>
                <li><strong>👉 Be honest with yourself: Too many tools, but no clarity on what to use You watch tutorials, but still feel stuck Your edits don’t look clean or professional.</strong></li>
              </ul>

              <p className='pb-3'> You are afraid to try advanced tools You don’t know correct file sizes, exports, or settings
                <br /> One mistake ruins your entire work You’re not bad at Photoshop. You were just never taught properly.
                <br />— This Ebook Fixes That…</p>
              <p>Whether you're a total beginner or stuck in semi-auto feature.</p>
              <p className='pb-3'>This guide finally gives you <strong>full control of Photoshop settings</strong><strong> — and Make you what other calls a real photoshop Master.</strong></p>
              <p>Unlike confusing YouTube tutorials, this ebook uses:</p>
              <ul className='pb-3'>
                <li>✔ Simple human examples</li>
                <li>✔ Clear step-by-step workflows</li>
                <li>✔ Real-world situations</li>
                <li>✔ Beginner-friendly language</li>
                <li>✔ Action items you can try instantly</li>
              </ul>
              <p>By the end, you won’t guess your settings…</p>
              <p><strong>you'll choose them. With confidence.</strong></p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="md:max-w-6x1 mx-auto px-3 py-5">
          <div className=' text-black md:w-350 md:mx-auto'>
            <Image src="/gallery/photoshop16.png"
              width={500}
              height={500}
              alt='photography-image'
              className='rounded-lg mb-5 md:mx-auto aspect-square' />
            <h3 className='text-2xl font-bold pb-3'>💡 WHAT YOU'LL LEARN (Key Highlights)</h3>
            <h3 className='text-lg'><strong></strong></h3>
            <p className='pb-3'></p>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Introduction – Why Photoshop Feels Hard (And Why It’s Not)</strong></h4>
                <p>Understand why most beginners feel overwhelmed by Photoshop and how confusion is created by wrong learning methods—not by lack of talent. This section resets your mindset and shows you how to learn Photoshop calmly and correctly from day one.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 1: Understanding Photoshop Interface (Without Confusion)</strong></h4>
                <p>Learn the Photoshop workspace in a simple, logical way. This chapter explains panels, tools, menus, and layouts so you always know where things are and why they exist, without memorizing everything at once.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 2: Files, Sizes & Quality (Most Ignored but Most Important)</strong></h4>
                <p>Discover how image size, resolution, DPI, and color modes affect quality. This chapter teaches you how to avoid blurry images, pixelation, and wrong exports before you even start editing.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 3: Selections – The Heart of Photoshop</strong></h4>
                <p>Selections are the foundation of every good edit. Learn all selection tools, when to use each one, and how to create clean, accurate selections that make your edits look professional.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 4: Layers Made Simple</strong></h4>
                <p>Understand layers without fear. This chapter explains how layers work, how to organize them, and how to avoid common beginner mistakes that slow down your workflow or ruin files.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 5: Adjustment Layers (Edit Without Damage)</strong></h4>
                <p>Learn how professionals edit without damaging images. This chapter shows how to control brightness, contrast, color, and tones using adjustment layers that are safe, flexible, and reversible.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 6: Masks – Editing Without Erasing</strong></h4>
                <p>Master layer masks and clipping masks so you can hide, reveal, and control edits without deleting anything. This chapter builds confidence and removes the fear of making irreversible mistakes.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 7: Photo Retouching (Clean & Natural Look)</strong></h4>
                <p>Learn how to retouch skin, portraits, and objects while keeping results realistic. This chapter focuses on clean, natural edits—not over-edited or fake-looking images.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 8: Color Correction & Color Grading</strong></h4>
                <p>Understand the difference between fixing colors and styling them. Learn how to correct color problems and apply cinematic or professional color grades with full control and consistency.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 9: Text & Typography in Photoshop</strong></h4>
                <p>Learn how to work with text properly—fonts, spacing, alignment, and hierarchy. This chapter helps you design readable, balanced, and visually pleasing text for posts, banners, and ads.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 10: Image Manipulation & Composites</strong></h4>
                <p>Combine multiple images into one realistic scene. Learn how to match lighting, perspective, shadows, and colors so your composites look believable and professional.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 11: Brushes, Patterns & Custom Assets</strong></h4>
                <p>Discover how to use and create brushes, patterns, and custom assets to speed up your work. This chapter shows how to build a personal asset library that saves time and improves creativity.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 12: Filters & Effects (Use Wisely)</strong></h4>
                <p>Learn how to use filters and effects without ruining your image. This chapter teaches restraint, control, and smart usage so effects enhance your work instead of overpowering it.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 13: Advanced Selections & Refinements</strong></h4>
                <p>Take selections to the next level. Learn hair selection, edge refinement, background removal, and difficult object cut-outs using advanced tools and smart techniques.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 14: Smart Objects & Non-Destructive Workflow</strong></h4>
                <p>Understand Smart Objects and how professionals use them to work faster, safer, and more efficiently. This chapter helps you future-proof your edits and reuse designs easily.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 15: Mastering Generative Fill & AI in Photoshop</strong></h4>
                <p>Learn how to use Photoshop’s AI tools the right way—not as shortcuts, but as creative assistants. This chapter explains Generative Fill, Generative Expand, AI-powered selections, and content-aware tools in simple terms.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 16: Automation & Speed</strong></h4>
                <p>Learn how to work faster without stress. This chapter covers actions, batch processing, essential shortcuts, and time-saving habits used by professionals.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 17: Photoshop for Social Media</strong></h4>
                <p>Design content that actually works on social platforms. Learn correct sizes, layouts, export settings, and workflows for Instagram posts, thumbnails, and ad creatives.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 18: Photoshop for Business & Freelancing</strong></h4>
                <p>Learn how to work like a professional. This chapter covers client-ready files, handling revisions, file naming, organization, and common beginner mistakes that hurt credibility.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 19: Exporting & Saving Correctly</strong></h4>
                <p>Learn the right way to save files. Understand JPG vs PNG vs PSD, web vs print exports, and how to compress images without losing quality.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 20: Common Photoshop Problems & Fixes</strong></h4>
                <p>Solve real-world problems like lag, crashes, scratch disk errors, and large file issues. This chapter helps you stay productive instead of frustrated.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white px-3 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
                <h4 className='text-lg'><strong>📍Chapter 21: How to Practice & Improve Faster</strong></h4>
                <p>Learn how to build skill consistently. This final chapter covers daily practice routines, learning mindset, mistakes to avoid, and how to become confident—not perfect.</p>
                <p className='pb-3'>A universal workflow that works for any type of Images.</p>
              </div>
            </Reveal>
            <hr className="text-black"/>
            <Reveal>
              <Image src="/gallery/photoshop15.png"
                width={450}
                height={450}
                alt='photography-image'
                className='rounded-lg mt-5 md:mx-auto aspect-square' />
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="md:max-w-360 mx-auto px-4">
          <h3 className='text-2xl py-2 text-center md:text-left'><strong>🎁BONUS: PRACTICE PROJECTS INCLUDED</strong></h3>
          <div className='bg-white px-5 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border'>
            <h4 className='text-lg'><strong>😎 Learning without practice is incomplete.</strong></h4>
            <p>That’s why this ebook includes:</p>
          </div>
          <div className="md:flex md:gap-10 justify-center">
            <div className='bg-white px-5 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border md:h-20 md:flex items-center'>
              <h4 className='text-lg'><strong>🎉Bonus 1: Real-world practice projects</strong></h4>
            </div>
            <div className='bg-white px-5 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border md:h-20 md:flex items-center'>
              <h4 className='text-lg'><strong>🎉Bonus 2: Step-by-step worksheets</strong></h4>
            </div>
            <div className='bg-white px-5 py-3 rounded-lg mb-3 shadow-lg border-l-4 border-l-cyan-600 border-cyan-600/20 border md:h-20 md:flex items-center'>
              <h4 className='text-lg'><strong>🎉Bonus 3: Hands-on exercises after every major chapter</strong></h4>
            </div> <hr />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="md:max-w-6x1 mx-auto px-4 py-8">
          <div className='md:text-white grid md:grid-cols-[1fr,1fr]'>
            <div className='text-black md:w-350 md:mx-auto md:flex justify-between'>
              <div>
                <h3 className='text-xl font-bold h-9'>🔥WHO THIS EBOOK IS PERFECT FOR</h3><br />
                <div className='md:border-l-4 border-black rounded-b md:pl-4'>
                  <h4 className='font-semibold'>✔ Complete beginners</h4>
                  <h4 className='font-semibold'>✔ Self-taught editors</h4>
                  <h4 className='font-semibold'>✔ Freelancers</h4>
                  <h4 className='font-semibold'>✔ Content creators</h4>
                  <h4 className='font-semibold'>✔ Students</h4>
                  <h4 className='font-semibold'>✔ Business owners</h4>
                  <h4 className='font-semibold'>✔ Anyone who wants consistently perfect Editing</h4>
                </div>
                <p className='font-semibold'>If you want clarity, confidence, and clean results — this is for you 😎.</p>
              </div>
              <Image
                src="/gallery/photoshop14.png"
                width={500}
                height={500}
                alt='photography-image'
                className='mt-2 mr-10 rounded-lg shadow-lg' />
            </div>
          </div>
        </div>
      </Reveal>

      {/* CONTENT */}
      <main className=" space-y-10">
        <Reveal>
          <div>
            <h3 className='text-3xl text-center font-bold mb-2'>Ebook Details</h3>
          </div>
          <div className="md:max-w-6xl mx-auto px-2">
            <div className='md:text-white grid md:grid-cols-[1fr,1fr]'>
              <div className='bg-cyan-600/20 rounded-lg shadow-lg p-6 text-black'>
                <div>
                  <p className='py-2 text-[17px]'><strong>📥 Download Your Ebook & Take Full Control of Your Camera</strong></p><hr />
                  <p className='py-2 text-[17px]'><strong>Ebook pages - 290 pages of Detailed Explaination with Practical Guide..!</strong></p><hr />
                  <p className='py-2 text-[17px]'><strong>👉 Stop guessing. Start creating. BUY NOW 🔥</strong></p>
                </div>
                <div className='mx-auto w-full md:w-100 space-y-3'>
                  <Reveal>
                    <div className='shadow shadow-bg-white bg-white rounded-md text-center mb-2 h-10 content-center'>
                      <p><strong> Get this ebook today for Just $27.00 </strong></p>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className='shadow shadow-bg-white bg-white rounded-md h-10 flex items-center justify-center'>
                      <p className='flex gap-2'><strong> Instant download</strong> <Timer /></p>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className='shadow shadow-bg-white bg-white rounded-md h-10 flex items-center justify-center'>
                      <p className='flex gap-2'><strong> Beginner friendly</strong><Handshake /></p>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className='shadow shadow-bg-white bg-white rounded-md text-center mb-2 h-10 content-center'>
                      <p><strong> Lifetime access 🎉 </strong></p>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className='shadow shadow-bg-white bg-white rounded-md h-10 flex items-center justify-center'>
                      <p className='flex gap-2'><strong> 12K + Happy Customer 🥳</strong></p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl text-center font-bold mb-6">
            Sample Pages of Ebook
          </h2>
          <div className="md:w-full flex md:block md:mx-auto justify-center">
            <LandingPageCarousel />
          </div>
        </Reveal>

        <div>
          <div className='mb-5'>
            <h3 className='text-center text-2xl font-semibold'>Testimonials</h3>
          </div>
          <div className="md:w-220 mx-auto px-4 md:flex justify-evenly flex-wrap space-y-6 md:space-y-6 gap-x-24">
            <Reveal>
              <div className='shadow-lg w-80 mx-auto rounded-lg border border-l-4 border-cyan-600/20 border-l-cyan-600 px-3 space-y-2 py-2'>
                <p>“Explained things very clearly. I finally understand layers and masks properly what they DO”.</p>
                <div className='flex'><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /></div>
                <h4 className='flex gap-3'><Laugh className='text-cyan-600' />Michael Morgan</h4>
              </div>
            </Reveal>
            <Reveal>
              <div className='shadow-lg w-80 mx-auto rounded-lg border border-l-4 border-cyan-600/20 border-l-cyan-600 px-3 space-y-2 py-2'>
                <p>“Every beginner should read this before investing time in Photoshop as a career”.</p>
                <div className='flex'><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><StarHalf className='fill-amber-500 text-amber-500' /></div>
                <h4 className='flex gap-3'><Laugh className='text-cyan-600' />Ethan Brooks</h4>
              </div>
            </Reveal>
            <Reveal>
              <div className='shadow-lg w-80 mx-auto rounded-lg border border-l-4 border-cyan-600/20 border-l-cyan-600 px-3 space-y-2 py-2'>
                <p>I wasted 6 months on YouTube. This book explained everything in one book itself.</p>
                <div className='flex'><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /></div>
                <h4 className='flex gap-3'><Laugh className='text-cyan-600' />Ryan Parker</h4>
              </div>
            </Reveal>
            <Reveal>
              <div className='shadow-lg w-80 mx-auto rounded-lg border border-l-4 border-cyan-600/20 border-l-cyan-600 px-3 space-y-2 py-2'>
                <p>“Beginner friendly but still useful if you already know the basics.”</p>
                <div className='flex'><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><Star className='fill-amber-500 text-amber-500' /><StarHalf className='fill-amber-500 text-amber-500' /></div>
                <h4 className='flex gap-3'><Laugh className='text-cyan-600' />James Thompson</h4>
              </div>
            </Reveal>
          </div>
        </div>

        <section className="md:max-w-6xl mx-auto px-6 py-5">
          <div className="mb-10 p-6 shadow-lg rounded-md bg-gray-100 md:w-275 md:mx-auto">
            <Accordion type="single" collapsible suppressHydrationWarning>
              <AccordionItem value="item-1">
                <AccordionTrigger>How it's delivered?</AccordionTrigger>
                <AccordionContent>
                  After a successful payment you will receive a download link (digital product) via Email. Also Check your Spam folder if not getting product in Inbox.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Who's this is for?</AccordionTrigger>
                <AccordionContent>
                  If you want clarity, confidence, and clean results — this is for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What You’ll Feel After Completing This Ebook?</AccordionTrigger>
                <AccordionContent>
                  “You will no longer “hope” your edit looks good. You will know what you’re doing and how it looks.”
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>for Lifetime?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's One time Purchase.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <div className="fixed bottom-0 flex justify-between md:justify-evenly items-center h-18 z-10 w-full border-t border-white bg-gray-900 px-2">
        <div className="text-2xl text-white">
          <Counter />
        </div>

        <div>
          <Button type="button" onClick={handleBuyNow} disabled={disabled} className="flex items-center text-xl py-3 px-3 rounded-md bg-white text-gray-900 font-medium h-11 w-39 transition duration-300">
            Get it now <ArrowRight className="size-5 ml-2 md:ml-3" />
          </Button>
        </div>
        <div>
          <h3 className="text-white hidden md:flex font-semibold text-2xl">LIMITED TIME OFFER!</h3>
        </div>
      </div>
    </div>
  )
}

export default PhotoshopClient