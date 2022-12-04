import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Advent of CSS and JS 2022</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Welcome to Advent of CSS and JS 2022</h1>
                <h2>By Sara Blom</h2>
                <div className="button-wrapper">
                    <button>1</button>
                    <Link href="/two">Two</Link>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>10</button>
                    <button>11</button>
                    <button>12</button>
                    <button>13</button>
                    <button>14</button>
                    <button>15</button>
                    <button>16</button>
                    <button>17</button>
                    <button>18</button>
                    <button>19</button>
                    <button>20</button>
                    <button>21</button>
                    <button>22</button>
                    <button>23</button>
                    <button>24</button>
                </div>
            </main>
        </div>
    );
};

export default Home;
